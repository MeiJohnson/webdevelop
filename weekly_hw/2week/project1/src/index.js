const moment = require('moment');

const newPre = document.createElement('pre');
document.body.appendChild(newPre);
newPre.textContent += 'Hello! Now is ' + moment().format('DD.MM.YYYY hh:mm:ss\n');

const newh4 = document.createElement('h4');
document.body.appendChild(newh4);
newh4.setAttribute('id', 'author');
newh4.setAttribute('title', 'MeiJohnson');
newh4.textContent += 'Анастасия Царулкова';
