//adEventListener, readFile,setTimeOut - async func
//два setTimeOut выполняются параллельно
//как правильно:
setTimeout(() => {

      console.timeEnd('s1');
      console.timeEnd('s2');
      setTimeout(() => console.timeEnd('s2'), 3000);

    }, 2000);
