import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';


const calculateHash = async () => {
  const fileExists = async (path) => {
    return stat(path)
      .then(() => true)
      .catch(() => false);
  };

  const filePath = join('files', 'fileToCalculateHashFor.txt');

  const exists = await fileExists(filePath);

  if (!exists) {
    throw new Error('FS operation failed');
  }

  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  await new Promise((resolve, reject) => {
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', resolve);
    stream.on('error', reject);
  });

  console.log(hash.digest('hex'));
};

await calculateHash();
