import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const write = async () => {
  const filePath = join('files', 'fileToWrite.txt');

  const writableStream = createWriteStream(filePath, { encoding: 'utf-8' });

  process.stdin.pipe(writableStream);
};

await write();
