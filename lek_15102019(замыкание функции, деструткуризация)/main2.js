//инъекиця, суекция, биекция
//ассоциативный массив - map, в js - это класс
//функция - сущность первого класс
const f = function(x){ return x * x; };
console.log(f(5));
console.log(''+f);
// Если использовать функцию как ключ, то будет использовано ее строковое представление
const o = { name:'Elias' }; //красивое написание
a = o.name;
console.log(a);
({ name:'Elias' }).name;
console.log(({ name:'Elias' }).name);
Object.keys(o);

let n = 5;
console.log(`число ${n}`); //стринг-темплейт

o.familyname = 'Goss';//прямой способ присвоения

//деструктуризация

{let m = 10; console.log(m);}//внутри блока переменные закрываются

 const { familyname } = o;//разрушающее присваивание - деструктуризация
 console.log(familyname);
