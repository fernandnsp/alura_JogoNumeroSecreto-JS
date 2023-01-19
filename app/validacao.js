function validaChute(chute) {
    const inteiro = +chute;
    
    if (typeInvalido(inteiro)) {
        elementoChute.innerHTML += '<div>Valor inválido! Precisa ser um número!</div>'
        return
    }

    if (ultrapassaLimite(inteiro)) {
        elementoChute.innerHTML += `
           <div>Inválido! Deve estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (inteiro === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="bnt-jogar">
                Jogar novamente
            </button>
        `
    } else if (inteiro < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>
                O número secreto é maior
                <i class="fa-solid fa-arrow-up-long"></i>
            </div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>
                O número secreto é menor
                <i class="fa-solid fa-arrow-down-long"></i>
            </div>
        `
    }
};

function ultrapassaLimite(numero) {
    valida = numero > maiorValor || numero < menorValor
    return valida;
};

function typeInvalido(numero) {
    return Number.isNaN(numero);
};

document.body.addEventListener('click', event => {
    if (event.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});