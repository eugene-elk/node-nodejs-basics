import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < cpus().length; i++) {
    const value = 10 + i;
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker('./worker.js', { type: 'module' });

      worker.on('message', (data) => {
        resolve({ status: 'resolved', data });
        worker.terminate();
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
        worker.terminate();
      });
      worker.postMessage(value);
    });

    workers.push(workerPromise);
  }

  const workerResults = await Promise.all(workers);

  console.log(workerResults);
};

await performCalculations();
