const fs = require('fs');
fs.readFile('1.txt',(e,val)=>console.log(String(val)));

/*
const { readFile: rF} = require('fs');
rF.readFile('1.txt',(e,val)=>console.log(String(val)));

*/
