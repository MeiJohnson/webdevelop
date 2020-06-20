const fetch = require('node-fetch');

(async () => {
    //Получение массива ip-адресов
    const data = await fetch('https://kodaktor.ru/j/ips')
        .then(x => x.json());
    // Помещение ip отдельно
    const ips = data.map((el) => {
        return el.ip;
    });
    //
    const table = ips.reduce((acc, el) =>{
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    // Получение частот и сортировка
    const freq_s = Object.values(table);
    freq_s.sort((a, b) => b-a);
    // Создание объекта с отсортированными значениями
    let table_sorted = {}
    for (let i = 0; i < freq_s.length; ++i) {
        for (key in table) {
            if (freq_s[i] === table[key]) table_sorted[key] = freq_s[i];
        };
    }
    console.log(table_sorted);
    // Ответы на вопросы
    const ip_am = Object.keys(table_sorted).length
    const single_am = freq_s.filter(x => x === 1).length;
    const max_freq = freq_s[0]
    console.log(`
    Всего адресов: ${ip_am}
    Посещался по 1 разу c ${single_am} адресов
    Максимальная частота ${max_freq}
    `);
})() 
