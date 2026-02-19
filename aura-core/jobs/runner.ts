import { jobs } from './index.js';
import { syncTreatments } from './core/syncer.js';
import type { Treatment } from '../engine/types/index.js';

async function main() {
  const args = process.argv.slice(2);
  const targetArg = args.find((arg) => arg.startsWith('--target='));
  const target = targetArg ? targetArg.split('=')[1] : 'all';

  console.log(`\n🤖 Batch Runner Initialized. Target: ${target}`);

  if (target === 'all') {
    const jobIds = Object.keys(jobs);
    console.log(`🚀 Starting Parallel Execution: ${jobIds.join(', ')}`);

    const startTime = Date.now();

    // 1. Run all jobs in parallel
    const results = await Promise.allSettled(
      jobIds.map((id) => jobs[id].run()),
    );

    const allTreatments: Treatment[] = [];
    let successCount = 0;
    let failCount = 0;

    results.forEach((res, index) => {
      const jobId = jobIds[index];
      if (res.status === 'fulfilled') {
        console.log(`✅ [${jobId}] Completed (${res.value.count} items)`);
        allTreatments.push(...res.value.treatments);
        successCount++;
      } else {
        console.error(`🚨 [${jobId}] Failed: ${res.reason}`);
        failCount++;
      }
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n⏱️  Execution Time: ${duration}s`);
    console.log(`📊 Stats: ${successCount} Success, ${failCount} Failed`);

    // 2. In-Memory Sync
    if (allTreatments.length > 0) {
      console.log(
        `\n🔄 Syncing ${allTreatments.length} collected items to Master...`,
      );
      const totalCount = await syncTreatments(allTreatments);
      console.log(`✨ Sync Complete. Master Catalog: ${totalCount} items.`);
    }
  } else {
    // Single Job Mode
    await runJob(target);
  }
}

async function runJob(target: string) {
  const job = jobs[target];
  if (!job) {
    console.error(`❌ Error: Job '${target}' not found.`);
    console.log('Available jobs:', Object.keys(jobs).join(', '));
    process.exit(1);
  }

  try {
    console.log(`\n▶️  Starting Job: [${target}]`);
    const result = await job.run();
    console.log(`✅ Job [${target}] Success.`);
    console.log(`   - Count: ${result.count}`);

    // Auto-sync for single job too
    console.log(`🔄 Syncing result to Master...`);
    const total = await syncTreatments(result.treatments);
    console.log(`✨ Master Catalog: ${total} items.`);
  } catch (error) {
    console.error(`🚨 Job [${target}] Failed.`);
    console.error(error);
    process.exit(1);
  }
}

main();
