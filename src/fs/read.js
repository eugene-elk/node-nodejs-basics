import { join } from 'node:path';
import { stat, readFile } from 'node:fs/promises';

const read = async () => {
  const fileExists = async (path) => {
    return stat(path)
      .then(stats => stats.isFile())
      .catch(() => false);
  };

  const folder = 'files';
  const path = join(folder, 'fileToRead.txt');

  const isFileExists = await fileExists(path);

  if (!isFileExists) {
    throw new Error('FS operation failed');
  }

  const file = await readFile(path, 'utf-8').catch(() => {
    throw new Error('FS operation failed');
  });
  console.log(file);
};

await read();
