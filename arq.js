//testar objetos
//possibilitar nova entrada de dados e deixá-los disponíveis para pesquisa também

let nome = document.querySelector('input#ad'); //trazer os elementos HTML
let resposta = document.querySelector('p#resp');
let botao = document.querySelector('button');
let noNome = document.querySelector('.enviar_nome');
let noIdade = document.querySelector('.enviar_idade');
let enviar_botao = document.querySelector('.botao_enviar');

//enviar novas pessoas para lista já existente
function acrescentar(){
    //manipulação de objects

}
enviar_botao.addEventListener("click", acrescentar);

//object inicial
//array para catalogação de pessoas
const pessoas = {  
    amy: {
        nome: 'nome: Amy',
        idade: 'idade: 36',
    },
    luna: {
        nome: 'nome: Luna',
        idade: 'idade: 35',
    },
    patricia: {
        nome: 'nome: Patrícia',
        idade: 'idade: 23',
    }
}

//função para enviar resposta de acordo com nome digitado por usuário
//precisa aceitar qualquer nome que o usuário digitar 
function responder() {
    if (nome.value === 'Amy') {
        resposta.innerHTML = amy.nome + '<br>' + amy.idade + '<br>' + amy.cabelo + '<br>' + amy.cor;  
        } else if (nome.value === 'Luna') {
            resposta.innerHTML = luna.nome + '<br>' + luna.idade + '<br>' + luna.cabelo + '<br>' + luna.cor;    
            } else if (nome.value === 'Patrícia') {
                resposta.innerHTML = patricia.nome + '<br>' + patricia.idade + '<br>' + patricia.cabelo + '<br>' + patricia.cor;
            }
}
botao.addEventListener('click', responder);     //mudar para disparar o evento quando a tecla espaço for pressionada