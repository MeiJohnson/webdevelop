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