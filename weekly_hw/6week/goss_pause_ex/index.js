const pause = require('goss_pause');
console.time('g');
pause(5000) || console.timeEnd('g');

console.time('h');
setTimeout(() => {
    console.log('Таймер на 6с');
}, 6000) || console.timeEnd('h');