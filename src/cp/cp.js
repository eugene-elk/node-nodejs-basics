import { spawn } from 'node:child_process';
import { join } from 'node:path';

const spawnChildProcess = async (args) => {
  const scriptPath = join('files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['inherit', 'inherit', 'inherit'],
  });

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
  child.on('error', (err) => {
    console.error('Failed to start child process:', err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
