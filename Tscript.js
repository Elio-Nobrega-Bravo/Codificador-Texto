let textoEntrada = document.querySelector(".texto-principal");
let textoSaida = document.querySelector(".texto");
let botaoCriptografar = document.querySelector(".botao-criptografar");
let botaoDescriptografar = document.querySelector(".botao-descriptografar");
let botaoCopiar = document.querySelector(".btn-copiar");

botaoCriptografar.onclick = criptografa;
botaoDescriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;

function criptografa(){
    let textoCriptografado = textoEntrada.value;

    let result = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    textoSaida.value = result;
}

function descriptografa(){
    let textoCriptografado = textoEntrada.value;

    let result = textoCriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    textoSaida.value = result;
}

function copiar() {
    resultado = document.querySelector(".texto");
    resultado.select();
    document.execCommand("cut")
}