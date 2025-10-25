import { join } from 'node:path';
import { stat, cp } from 'node:fs/promises';

const copy = async () => {
  const folderExists = async (path) => {
    return stat(path)
      .then(stats => stats.isDirectory())
      .catch(() => false);
  };
  
  const src = join('files');
  const dest = join('files_copy');

  const srcExists = await folderExists(src);
  const destExists = await folderExists(dest);

  if (!srcExists || destExists) {
    throw new Error('FS operation failed');
  }

  await cp(src, dest, { recursive: true }).catch(() => {
    throw new Error('FS operation failed');
  });
};

await copy();
