const counter = (n = 0) => () => ++n; //замыкание 
const closure = counter();
console.log(counter);
console.log(closure());
