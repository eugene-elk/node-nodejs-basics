import { join } from 'node:path';
import { stat, readdir } from 'node:fs/promises';

const list = async () => {
  const folderExists = async (path) => {
    return stat(path)
      .then(stats => stats.isDirectory())
      .catch(() => false);
  };

  const folder = join('files');
  
  const isFolderExists = await folderExists(folder);

  if (!isFolderExists) {
    throw new Error('FS operation failed');
  }

  const files = await readdir(folder).catch(() => {
    throw new Error('FS operation failed');
  });
  console.log(files);
};

await list();
