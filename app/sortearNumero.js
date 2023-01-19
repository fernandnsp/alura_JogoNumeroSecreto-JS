const menorValor = 1;
const maiorValor = 50;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


const numeroSecreto = geraNumeroAletario();

function geraNumeroAletario() {
    return parseInt(Math.random() * (maiorValor + 1));
};
