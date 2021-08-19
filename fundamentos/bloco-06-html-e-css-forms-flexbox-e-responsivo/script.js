let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
let selectEstados = document.getElementsByTagName('select')[0];
let optionSiglas = document.createElement('option');

//criando o laço de repetição para as inserir o option e seu conteudo
for (let i in estados) {
    let optionSiglas = document.createElement('option'); //  criando o elemento
    optionSiglas.setAttribute('value',estados[i]); // criando o atributo value e dando valor
    optionSiglas.innerText = estados[i]; // option =  array estados
    selectEstados.appendChild(optionSiglas); // inserindo filho(option) no pai (select)
}



