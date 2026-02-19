import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SeyeJob } from '../../../jobs/hospitals/seye/index.js';
import * as fs from 'fs';

// Mock Mock SeyeCrawler class
const mockCrawl = vi.fn();
const mockInit = vi.fn();
const mockClose = vi.fn();

vi.mock('../../../jobs/hospitals/seye/crawler', () => {
  return {
    SeyeCrawler: class {
      async init() {
        await mockInit();
      }
      async close() {
        await mockClose();
      }
      async crawl() {
        return await mockCrawl();
      }
    },
  };
});

// Mock fs module
vi.mock('fs', async () => {
  const actual = await vi.importActual('fs');
  return {
    ...actual,
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    writeFileSync: vi.fn(),
  };
});

describe('Seye Job Integration (BDD)', () => {
  let job: SeyeJob;

  beforeEach(() => {
    vi.clearAllMocks();

    // Default Crawler behavior
    mockCrawl.mockResolvedValue([
      {
        id: '123',
        hospitalName: 'Seye Clinic',
        name: 'Mock Laser',
        category: '1',
        url: 'http://mock.com',
        options: [{ name: 'Basic', price: 50000 }],
        crawledAt: '2025-01-01',
      },
    ]);

    // Default FS behavior
    vi.mocked(fs.existsSync).mockReturnValue(true);

    job = new SeyeJob();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should execute the full crawl pipeline successfully', async () => {
    // Act
    const result = await job.run();

    // Assert: Crawler lifecycle
    expect(mockInit).toHaveBeenCalledTimes(1);
    expect(mockCrawl).toHaveBeenCalledTimes(1);
    expect(mockClose).toHaveBeenCalledTimes(1);

    // Assert: Result structure
    expect(result.count).toBe(1);
    expect(result.source).toBe('Seye Clinic');
    expect(result.treatments).toHaveLength(1);

    // Assert: Data mapping correctness
    const treatment = result.treatments[0]!;
    expect(treatment.id).toBe('seye_123');
    expect(treatment.name).toBe('Mock Laser');
    expect(treatment.priceRange.min).toBe(50000);
  });

  it('should save raw and final data to disk', async () => {
    await job.run();

    // Assert: File system interactions
    // Raw data save
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.stringContaining('raw_products'),
      expect.any(String),
    );

    // Final data save
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.stringContaining('seye_treatments.json'),
      expect.any(String),
    );
  });

  it('should handle crawler errors gracefully', async () => {
    // Arrange: Crawler throws error
    mockCrawl.mockRejectedValueOnce(new Error('Network Error'));

    // Act & Assert
    await expect(job.run()).rejects.toThrow('Network Error');

    // Crawler should still be closed even on error
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
