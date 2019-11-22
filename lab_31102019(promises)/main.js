//https://kodaktor.ru/31102019
function todayIsTheDay(){

    //setTimeout(() => Out.log('прошло 5 секунд'), 5000); - откладывает совершения действия в очередь
    const pause = (y = 1000, x = Date.now()) => { while (Date.now() - x < y) ;};
    pause(5000); //активная пауза, блокирующая пауза
    Out.log('Прошло ли 5 секунд?');
  
  }
  
  function todayIsTheDay2(){
    const prT = x => new Promise(res => setTimeout(res, x * 1000));
  
    Promise
    .resolve(1)
    .then(x => console.log(x) || 2)
    .then(x => {
      console.log(x);
      return Promise.resolve(3);
    })
    .then(x => console.log(x))
    .then(x => prT(5))
    .then(x => console.log('5 сек'))
  }
  async function todayIsTheDay(){
    const prT = x => new Promise((res, rej) => {
      if (x > 5) rej('ОШИБОЧКА!!');
      else setTimeout(res, x * 1000);
    });
    console.time('f0');
    console.time('f1');
    await prT(5);
    console.timeEnd('f1');
    console.time('f2');
    await prT(5);
    console.timeEnd('f2');
   
  }
  
  ДЗ
  
  <!DOCTYPE html>
<html>
 <head>
  <title>Event Loop</title><meta charset="utf-8"><script src="/j/out"></script>
 </head>
 <body>
  
    <h1>Event Loop</h1><h2>пусто</h2>
    <script>console.clear();
      
      const prT = x => new Promise ((res, rej) => {
        if (x < 0) || (x > 10) rej('Ошибка');
        else
          setTimeout(res, x * 1000)
          });
      // добавить в этот промисифицированный таймер реджект в случае если x меньше 0 либо x больше 10 ДЗ!
      
      
      document.querySelector('h1')
      .style
      .cursor = 'pointer';
      document.querySelector('h1')
      .addEventListener('click', async ev => {
        
        console.time('s0');                 
        console.time('s1');
        await prT(2);
        Out.log('Прошло две секунды!');
        console.timeEnd('s1');
        console.time('s2');
        await prT(4);
        Out.log('Прошло четыре секунды!')
        console.timeEnd('s2');
        console.timeEnd('s0');
        ev.target.textContent = 'Да!!';
         
        console.time('s1');
        
                    
       
         
      
      });
      document.querySelector('h1')
      .style
      .color = 'red';
      
      Out.log(1);
      // setTimeout(() => Out.log(3), 0);
      Out.log(2);
      
      // ДЗ2 –  переделать под async/await 
      fetch('https://kodaktor.ru/g/cc4ad72')
      .then(x => x.text())
      .then(x => document.querySelector('h2').textContent = x)
      .catch(e => document.querySelector('h2').textContent = e);
      Out.log(4);
      
      async function fun(){
      	const URL = 'https://kodaktor.ru/g/cc4ad72';
        const part1 = await fetch(URL);
        const part2 = await part1.text();
        const prom1 = new Promise((resolve, reject) => {
    	resolve (x => document.querySelector('h2').textContent = x);
        reject (e => document.querySelector('h2').textContent = e);
  		});

        const part3 = await prom1; 
      }

    </script> 
  
 </body>
</html>
