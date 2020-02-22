const nodeFetch = require('node-fetch'); 
const URL = 'http://kodaktor.ru/j/users';
const res = nodeFetch(URL)
.then(x => x.json())
.then(res => {
    for (let key in res) {
        const { users } = res;    
        console.log(login);
}
});

s