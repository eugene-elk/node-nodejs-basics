const parseArgs = () => {
  const args = process.argv;

  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    if (!args[i].startsWith('--')) continue;
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    result.push(`${key} is ${value}`);
  }

  console.log(result.join(', '));
};

parseArgs();
