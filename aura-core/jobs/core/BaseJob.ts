import type { ITreatmentJob, TreatmentJobResult } from './types.js';
import * as fs from 'fs';
import * as path from 'path';

export abstract class BaseJob implements ITreatmentJob {
    abstract readonly id: string;
    
    protected dataDir: string;
    protected rawDir: string;

    constructor() {
        // Base directories for data output
        this.dataDir = path.resolve(process.cwd(), 'data/treatments');
        this.rawDir = path.resolve(process.cwd(), 'data/raw');

        // Ensure directories exist
        if (!fs.existsSync(this.dataDir)) fs.mkdirSync(this.dataDir, { recursive: true });
        if (!fs.existsSync(this.rawDir)) fs.mkdirSync(this.rawDir, { recursive: true });
    }

    abstract run(): Promise<TreatmentJobResult>;

    protected saveRawData(filename: string, data: any): void {
        const filePath = path.join(this.rawDir, this.id, filename);
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`[BaseJob] Saved raw data to ${filePath}`);
    }

    protected saveResult(filename: string, data: any): void {
        const filePath = path.join(this.dataDir, filename);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`[BaseJob] Saved final result to ${filePath}`);
    }
}
