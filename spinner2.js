let delay = 200;
const frames = ['|', '/', '-', '\\'];
const time = delay * frames.length;

const loop = setInterval(() => {
  for (let i = 0; i < frames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${frames[i]}   `);
    }, delay * i);
  }
}, time);

setTimeout(() => {
  clearInterval(loop);
  process.stdout.write('\n');
}, 4000);