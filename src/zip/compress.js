import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  const inputPath = join('files', 'fileToCompress.txt');
  const outputPath = join('files', 'archive.gz');

  const source = createReadStream(inputPath);
  const destination = createWriteStream(outputPath);
  const gzip = createGzip();

  await pipeline(source, gzip, destination);
};

await compress();
