import { join } from 'node:path';
import { stat, rm } from 'node:fs/promises';

const remove = async () => {
  const fileExists = async (path) => {
    return stat(path)
      .then(stats => stats.isFile())
      .catch(() => false);
  };

  const folder = 'files';
  const path = join(folder, 'fileToRemove.txt');

  const isFileExists = await fileExists(path);

  if (!isFileExists) {
    throw new Error('FS operation failed');
  }

  await rm(path).catch(() => {
    throw new Error('FS operation failed');
  });
};

await remove();
