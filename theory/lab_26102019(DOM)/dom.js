// chrome - каркас для отображения веб-страницы
// realm -

// DOM - Document Object Model
// window - в самом верху иерархии

const person = {fname: 'El', lname:'Goss'};
person.getFullName = function(){ return this.fname + ' ' + this.lname };
const person2 = {fname: 'Nick', lname:'Northbug'};
person.getFullName.call(person2); // Nick Northbug


// Global Object

global.parseInt('444rrr'); // 444, global - в консоли
// window.parseInt('444rr') в браузере
// внутри консоли this ссылается на глобальный объект, внутри файла внутри файла. Внутри файло оно указывает на modile_exports

//defer - отложить выполнение сценария
//polyfill, shim
//browser rendering cycle
