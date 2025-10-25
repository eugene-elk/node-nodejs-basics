import { join } from 'node:path';
import { stat, rename as fsRename } from 'node:fs/promises';

const rename = async () => {
  const fileExists = async (path) => {
    return stat(path)
      .then(stats => stats.isFile())
      .catch(() => false);
  };

  const folder = 'files';
  const oldPath = join(folder, 'wrongFilename.txt');
  const newPath = join(folder, 'properFilename.md');

  const isOldFileExists = await fileExists(oldPath);
  const isNewFileExists = await fileExists(newPath);

  if (!isOldFileExists || isNewFileExists) {
    throw new Error('FS operation failed');
  }

  await fsRename(oldPath, newPath).catch(() => {
    throw new Error('FS operation failed');
  });
};

await rename();
