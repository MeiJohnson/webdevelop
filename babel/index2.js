import babel from '@babel/core';
const code = 'const n = 1';
const output = babel.transformSync(

// изменяем ast
traverse(ast, {
  enter(path) {
    // в этом примере мы меняем все переменные `n` на `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// генерируем код обратно из ast
const output = generate(ast, code);
console.log(output.code); // 'const x = 1;' 
