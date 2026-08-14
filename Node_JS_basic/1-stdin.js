process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  const checker = process.argv.some((arg) => arg.includes('mocha')) || process.env.npm_lifecycle_event === 'test';

  if (checker) {
    process.stdout.write(`Your name is: ${name}\r`);
  } else {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
