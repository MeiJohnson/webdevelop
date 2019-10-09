//thunk - описываем действие, но не совершаем его/ Куда-нибудь передаем лямбду
-function() {
  console.log('unusual iife');
}();

console.log.call(null, 'Вызов колл');

//'abc'.length
//object wrapper - объектная обертка

//(x => x())(() => console.log('Вызов'));
//это  iife
//iife потсроена на лямбде x => x()
//в не передается наша лямбда

function thisDemo() { // миксин 
  return this*this;
}
console.log(thisDemo.call(5));
