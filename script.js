const valor = document.getElementById('valor');
const aumentar = document.getElementById('aumentar');
const diminuir = document.getElementById('diminuir');
const reset = document.getElementById('reset');
const errorp = document.getElementById('errorp');

let numero = 0;
const minValor = 0;
const maxValor = 999;

// Função para atualizar o display
function atualizarDisplay() {
    valor.textContent = numero;

    // Animação rápida de "pop"
    valor.style.transform = 'scale(1.2)';
    setTimeout(() => valor.style.transform = 'scale(1)', 150);

    // Cor dependendo do valor
    valor.style.color = numero > 0 ? '#2ecc71' : '#fff';
    
    // Limpa mensagem de erro
    errorp.textContent = '';
}

// Evento do botão aumentar
aumentar.addEventListener('click', () => {
    if (numero < maxValor) {
        numero++;
        atualizarDisplay();
    } else {
        errorp.textContent = `Não pode números acima de ${maxValor}`;
    }
});

// Evento do botão diminuir
diminuir.addEventListener('click', () => {
    if (numero > minValor) {
        numero--;
        atualizarDisplay();
    } else {
        errorp.textContent = `Não pode números abaixo de ${minValor}`;
    }
});

// Evento do botão reset
reset.addEventListener('click', () => {
    numero = 0;
    atualizarDisplay();
});

// Controle pelo teclado (+, -, r)
document.addEventListener('keydown', e => {
    if (e.key === '+' || e.key === '=') aumentar.click();
    if (e.key === '-') diminuir.click();
    if (e.key.toLowerCase() === 'r') reset.click();
});