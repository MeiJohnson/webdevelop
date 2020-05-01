{
new Clicker(async () => {
           
    const mime = 'text/html';
    const p = new DOMParser();
    const f = x => x.text();
    
    const doc = p.parseFromString(await fetch('/g/books_list').then(f), mime); 
      
    const books = doc.querySelectorAll('book');
    //простой способ
    let tableString = ''; 
    books.forEach(x => {
      const title = x.querySelector('title').textContent;
      const author = x.querySelector('author').textContent;
      const year = x.querySelector('year').textContent;
      const tableRowString = '<tr><td><i>' + title + '</i></td><td>' + author + '</td><td>' + year + '</td></tr>';
      tableString += tableRowString;
      document.querySelector('table').innerHTML = tableString;             
    });  }, caption='Щёлкни');  
  
}

{
    new Clicker(async () => {
               
        const mime = 'text/html';
        const p = new DOMParser();
        const f = x => x.text();
        
        const doc = p.parseFromString(await fetch('/g/books_list').then(f), mime); 
          
        const books = doc.querySelectorAll('book');
        //не простой способ
   const tableBook = document.body.appendChild(document.createElement('table'));
        books.forEach(x => {
          const title = x.querySelector('title').textContent;
          const author = x.querySelector('author').textContent;
          const year = x.querySelector('year').textContent;
          
         
          const trBook = tableBook 
          .appendChild(document.createElement('tr'));
          trBook
          .appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(year));
          trBook
          .appendChild(document.createElement('td'))
          .appendChild(document.createElement('i'))
          .appendChild(document.createTextNode(title));
          trBook
          .appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(author));   
        });  }, caption='Щёлкни2');  
}

<!DOCTYPE html>
<html>
 <head>
  <title>JavaScript</title><meta charset="utf-8">
 </head>
 <body>
    <script src="/j/out"></script>
    <script src="/j/dblttl"></script><script src="/j/clicker"></script>
    <script>{ console.clear();
new Clicker(async () => {
    const newImage = document.createElement('img');
    const imageName = '/libelulla_small.png';         
    newImage.src = newImage.title = imageName;
             
    document.body.appendChild(newImage);  
      newImage.addEventListener('click', ({ target: t }) => {
      const tempArray = t.title.split('.')[0].split('_');
      t.src = tempArray[0] + '_big.png';       
    });         

}, caption='Щёлкни');      
  
    }</script>
 </body>
</html>

