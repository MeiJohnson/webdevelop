/**
 * Выводит номера rgb цветовой палитры
 */ 
const concat = require('goss_concat');
let r, g, b;
const rgb = (r,g,b) => concat('rgb(', r,', ', g, ', ', b,')');
console.log(rgb(123,33,22));
const hex_rgb = (r, g, b) => concat('#', r.toString(16), g.toString(16), b.toString(16));
console.log(hex_rgb(0xAB,0xDD,0xFA));