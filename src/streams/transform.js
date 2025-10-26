import { Transform } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk.toString().trim().split('').reverse().join('');
      callback(null, reversed + '\n');
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
