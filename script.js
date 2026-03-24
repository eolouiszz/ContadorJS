const valor = document.getElementById('valor');
const aumentar = document.getElementById('aumentar');
const diminuir = document.getElementById('diminuir');
const reset = document.getElementById('reset');
const errorp = document.getElementById('errorp');

let numero = Number(localStorage.getItem('contador')) || 0;
const minValor = 0;
const maxValor = 999;

function atualizarDisplay() {
    valor.textContent = numero;
    valor.style.transform = 'scale(1.2)';
    setTimeout(() => valor.style.transform = 'scale(1)', 150);
    valor.style.color = numero > 0 ? '#2ecc71' : '#fff';
    errorp.textContent = '';
    localStorage.setItem('contador', numero);
}

aumentar.addEventListener('click', () => {
    if (numero < maxValor) {
        numero++;
        atualizarDisplay();
    } else {
        errorp.textContent = `Não pode números acima de ${maxValor}`;
    }
});

diminuir.addEventListener('click', () => {
    if (numero > minValor) {
        numero--;
        atualizarDisplay();
    } else {
        errorp.textContent = `Não pode números abaixo de ${minValor}`;
    }
});

reset.addEventListener('click', () => {
    numero = 0;
    atualizarDisplay();
});

document.addEventListener('keydown', e => {
    if (e.key === '+' || e.key === '=') aumentar.click();
    if (e.key === '-') diminuir.click();
    if (e.key.toLowerCase() === 'r') reset.click();
});

atualizarDisplay();