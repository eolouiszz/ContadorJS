let valor = document.getElementById('valor')
let aumentar = document.getElementById('aumentar')
let diminuir = document.getElementById('diminuir')
let reset = document.getElementById('reset')
let errorp = document.getElementById('errorp')
let numero = 0;

aumentar.addEventListener('click', () => {
    numero++;
    valor.textContent = numero
    if (numero >= 0) {
        errorp.textContent = ''
    }
})

diminuir.addEventListener('click', () => {
    if (numero === 0) {
        errorp.textContent = 'não pode números abaixo de zero'
        return;
    }
    numero--;
    valor.textContent = numero
})

reset.addEventListener('click', () => {
    numero = 0;
    valor.textContent = 0;
    errorp.textContent = '';
})