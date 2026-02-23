const { fork } = require('node:child_process');

console.log('parent: forking child...');
const child = fork(require.resolve('./forktest-child.js'), { stdio: 'inherit' });
child.on('exit', (code, signal) => {
  console.log('parent: child exited', { code, signal });
});
child.on('error', (err) => {
  console.error('parent: child error', err);
});

