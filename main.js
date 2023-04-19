require("./style.css")
const { soma, subtracao, multiplicacao, divisao } = require("./calculadora");

let cor_amarelo = "#ffd900";
let cor_verde = "#338b18";
let cor_vermelha = "#f50a1e";
let cor_preta = "#1a1919";
let cor_laranja = "#e25d34";
let cor_branca = "#fff"

//adicionando os eventos nos botoes
document.getElementById("botao_dividir").addEventListener("click",dividir_ex)
document.getElementById("botao_concatena").addEventListener("click",concatena_nome)


function dividir_ex() {

    let total = 0
    const valor1 = document.getElementById("val1")
    const valor2 = document.getElementById("val2")

    // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
    const value1 = Number(valor1.value)
    const value2 = Number(valor2.value)    

    
    total = divisao(value1, value2)

    //VALIDANDO A SAIDA
    if (isNaN(total)) {
        exibe_aviso("aviso", "Impossível calcular, informe apenas nûmeros!", cor_vermelha, cor_branca)
    }
    else {
        const resultado = document.getElementById("total_ex")
        resultado.innerText = total
    }

}


function concatena_nome() {

    //pegando os valores do form ENTRADA
    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value


    //PROCESSAMENTO
    let nome_completo = ""
    if(nome == "" || sobrenome == "")
      nome_completo = "vazio"
    nome_completo = `${nome} ${sobrenome}`

    

    //VALIDANDO A SAIDA
    if (nome_completo == "vazio") {
        exibe_aviso("aviso", "Vocẽ precis informar nome e sobrenome!", cor_vermelha, cor_branca)
    }
    else {
        const resultado = document.getElementById("total_concat")
        resultado.innerText = nome_completo
    }

}


function exibe_aviso(elemento, mensagem, cor_fundo, cor_texto) {
    const resultado = document.getElementById(elemento)
    resultado.style.backgroundColor = cor_fundo
    resultado.style.color = cor_texto
    resultado.style.display = "flex"
    resultado.style.alignItems = "center"
    resultado.style.justifyContent = "center"

    resultado.innerText = mensagem
    setTimeout(function () {
        // oculta a div após 5 segundos
        resultado.style.display = "none";
    }, 5000);
}