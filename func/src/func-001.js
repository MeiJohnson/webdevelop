const concat = require('goss_concat');
let r = 255;
let g = 255;
let b = 255;
const rgb = (r,g,b) => concat('rgb(', r,', ', g, ', ', b,')');
console.log(rgb(123,33,22));
