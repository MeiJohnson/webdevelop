const a1 = () => console.log('a');
const b1 = () => console.log('b');
a1();
b1();

const a ="aa";
const b ="bb";
const o = {a:"1",b:"2"};
const o1 = {[a]:"1",[b]:"2"};
const o2 = {[a]:["1","2"],[b]:["3","4"]};

const o3 = {[a1]:"1",[b1]:"2"};

console.log([Object.keys(o3)[0]]);

const c = () => console.log('func');
const d = () => console.log('func');

const o4 = {[c]:"1",[d]:"2"};
console.log(Object.keys(o4));

const arr = ['a','b','c'];
console.log(Object.keys(arr));
console.log(arr.length)
arr.length = 5;
arr[3] = 'd'
console.log(arr);
arr[5] = 'f'
console.log(arr);
arr.length = 3;
console.log(arr);
console.log(typeof(arr));
console.log(arr.constructor);
console.log(o2.constructor);
arr.length = 6;
arr[4] = 's';
arr[5] = 5;
console.log(arr);
arr.forEach(x => console.log(x))
arr.forEach((x,i) => console.log(i))
arr.forEach(x => console.log(x))

console.log(' '.charCodeAt(0));
console.log('!'.charCodeAt(0));
console.log(String.fromCharCode(33));
console.log(String.fromCharCode(10084));
console.log(String.fromCharCode(10085));
console.log(String.fromCharCode(10086));
console.log(String.fromCharCode(666));
console.log(''.charCodeAt().toString(2));
console.log(0x2764);
console.log(0b111);
console.log(String.fromCharCode());
console.log(String.fromCharCode('ༀ'.charCodeAt()));
console.log(String.fromCharCode(0xF00));
console.log('\u0f68\u0f7c\u0f7e');
console.log('\u0065\u0304');
'ༀ'.split('').forEach(x => console.log(x));// Должен выводить букву по частям
for (let s of 'ༀ') console.log(s);// Должен выводить букву по частям

const oo = {a:11, b:22, c:33};
for (let k in oo) console.log(k);
['!','&','?'].forEach(x => console.log(x.charCodeAt(0)));
console.log(['!','&','?'].map(x => x.charCodeAt(0))); //Map - не мутирующий метод
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, b) => a + b)) // Map и reduce - два столпа функционального программирования.
const arrm = [3,55,17];
Math.max(4,56,18);
console.log(Math.max(...arrm));
const strm = '186';
console.log(Math.max(...strm));
