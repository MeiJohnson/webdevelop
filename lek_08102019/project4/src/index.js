function f(x, y){
  let s = x;
  for (let i = 0; i<y; ++i){
    ++s;//s+=1;
  }
  return s;
}
console.log(f(3,7));
