const m = ["return x[0] * x[1] * x[2] * x[3]", "return x.reduce((z, y) => z + y)"];
const { g } = m;
console.log(g);
const funcs = g.map(function(g){
    return Function(...x,g);
    });
console.log(funcs);