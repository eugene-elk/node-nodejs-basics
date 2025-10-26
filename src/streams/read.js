import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const read = async () => {
  const filePath = join('files', 'fileToRead.txt');

  const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

  readableStream.pipe(process.stdout);
};

await read();
