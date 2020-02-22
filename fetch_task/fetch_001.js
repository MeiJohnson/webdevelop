const fetch = require('node-fetch');

const fio = 'Царулкова Анастасия Витальевна';
async function task(x) {
    const url =  `https://kodaktor.ru/api/m/${x}`;
    const response = await fetch(url, { 
        headers: {
            "Content-Type": "application/json" 
            }});
    const m_result = await response.json();
    const result =  await m_result.result;
    return result;
}

"""
let result = '';
// const values = ... извлеките из первого списка
const values = Array.from(document.querySelector('#values li'));
// const URLs = ... извлеките из второго списка
const URLs = Array.from(document.querySelector('#urls li'))
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    // здесь напишите код, последовательно отправляющий запросы
    // согласно спецификации kodaktor.ru/async_tasks
    t.textContent = `Результат: ${result}`;
  }
); 
"""