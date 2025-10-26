import { join } from 'node:path';
import { stat, writeFile } from 'node:fs/promises';

const create = async () => {
  const fileExists = async (path) => {
    return stat(path)
      .then(() => true)
      .catch(() => false);
  };

  const filePath = join('files', 'fresh.txt');
  const text = 'I am fresh and young';

  const exists = await fileExists(filePath);

  if (exists) {
    throw new Error('FS operation failed');
  }

  await writeFile(filePath, text, 'utf8');
};

await create();
