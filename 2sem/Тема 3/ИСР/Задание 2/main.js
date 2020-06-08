const captchaBlock = document.createElement('div');
captchaBlock.id = 'captcha';
document.body.appendChild(captchaBlock);
const captchaNode = document.getElementById('captcha');


const canva = document.createElement('canvas'),  
ctx = canva.getContext('2d');
canva.setAttribute('width', '100'); 
canva.setAttribute('height', '50');
captchaNode.appendChild(canva);

let code = ''
function randomSymbols() {
    ctx.rect(0,0,130,70);
    ctx.fillStyle = 'white';
    ctx.fill();

    const allSymb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
    let captcha = "";
    while (captcha.length < 5) {
        captcha += allSymb[Math.floor(Math.random() * allSymb.length)];
    }
    ctx.font = "30px Verdana";
    ctx.strokeStyle = "blue";
    ctx.strokeText(captcha,10,30);
    code = captcha;   
};

randomSymbols();

const ansForm = document.createElement('input');
const entButton = document.createElement('button');
ansForm.type = 'text';
ansForm.value = 'Enter code here';

function clearForm() {
    if (ansForm.value == 'Enter code here'){
        ansForm.value = '';
    }
};

ansForm.addEventListener('click',clearForm);

function checkCode() {
    if (ansForm.value == code){
        alert('CAPTCHA completed successfully :)');
    } else {
        alert('Try again :(');
        ansForm.value = '';
    }

}
entButton.textContent = 'Go';
entButton.addEventListener('click',checkCode);
captchaNode.appendChild(ansForm);
captchaNode.appendChild(entButton);

const refresh = document.createElement('button');
refresh.textContent = 'Refresh';
refresh.addEventListener('click', randomSymbols);
captchaNode.appendChild(refresh);
