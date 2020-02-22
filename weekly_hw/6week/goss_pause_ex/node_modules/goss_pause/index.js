module.exports = (y = 10000, x = Date.now()) => { while (Date.now() - x < y) ;};

// const pause = require('goss_pause');
// pause(5000)

