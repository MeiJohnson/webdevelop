const inc = x => x + 1;
sum = (x, y) => y === 0 ? x : inc(sum(x,y - 1));
console.log(sum(5,3))  
