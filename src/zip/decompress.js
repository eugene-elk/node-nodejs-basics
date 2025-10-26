import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { join } from 'node:path';


const decompress = async () => {
  const inputPath = join('files', 'archive.gz');
  const outputPath = join('files', 'fileToCompress.txt');
  
  const source = createReadStream(inputPath);
  const destination = createWriteStream(outputPath);
  const gunzip = createGunzip();

  await pipeline(source, gunzip, destination);
};

await decompress();
