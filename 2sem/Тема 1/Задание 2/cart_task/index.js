 (async() => {

    const url = 'https://kodaktor.ru/cart_data.json';
    const prices_lst = await fetch(url).then(x =>x.text());
    const prices_json = JSON.parse(prices_lst);
    console.log(prices_json);
    // Счетчики
    let sum = 0;
    let budget = Number(document.getElementById('budget').innerHTML);
    const c_budget = Number(document.getElementById('budget').innerHTML);

    const ist = document.querySelectorAll('.prodcap'), pri = document.querySelector('#cart');
 
    for (let el of ist){
      el.setAttribute('draggable', true);
      el.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', e.target.id));
      
      const product_name = document.createElement('figcaption');
      product_name.setAttribute('class','pr_name');
      product_name.appendChild(document.createTextNode(el.id));
      el.append(product_name);
     
      const product_price = document.createElement('figcaption');
      product_price.setAttribute('class','pr_price');
      product_price.appendChild(document.createTextNode(prices_json[el.id]));
      el.append(product_price);
    }  
    pri.addEventListener('dragover', e => e.preventDefault());
    // Добавление в корзину 
    pri.addEventListener('drop', (e) => {
      drag_el = document.getElementById(e.dataTransfer.getData('text/plain')).cloneNode(true);
      e.target.appendChild(drag_el);
    });
    
    // Счётчик цен в корзине
    pri.addEventListener('drop', (e) => {
      const drag_el = document.getElementById(e.dataTransfer.getData('text/plain'));
      if (sum + Number(drag_el.lastChild.textContent) <= c_budget)
        sum += Number(drag_el.lastChild.textContent);
      document.getElementById('num').textContent = sum;
      });
    
    // Счётчик бюджета
    pri.addEventListener('drop', (e) => {
      const drag_el = document.getElementById(e.dataTransfer.getData('text/plain'));
      const temp_price = drag_el.lastChild.textContent
      if (budget >= Number(temp_price)){
        budget -= Number(temp_price)
        document.getElementById('budget').textContent = budget;
      } 
      else{
        //budget = 0;
        document.getElementById('budget').textContent = budget;
        alert('У вас кончились деньги!');
        pri.removeChild(pri.lastChild);
     }        
    });
    remove_cross = document.createElement('button');
    remove_cross.addEventListener('click', (e) => {
      const cart = document.getElementById('cart');
      let cart_child = cart.lastElementChild;
      while (cart_child) {
        cart.removeChild(cart_child);
        cart_child = cart.lastElementChild;
        budget = c_budget;
        document.getElementById('budget').textContent = c_budget;
        sum = 0;
        document.getElementById('num').textContent = 0;
      }
    })
    remove_cross.textContent = 'Удалить все товары';
    document.querySelector('body').appendChild(remove_cross);
  }
)();