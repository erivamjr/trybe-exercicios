/* 
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo 
como parâmetros o número apostado e uma função que checa se 
o número apostado é igual ao número sorteado. O retorno da sua 
HOF deve ser uma string (Ex: "Tente novamente" ou 
"Parabéns você ganhou"). 
*/

function getRandomInt(cb) {
    let min = 1;
    let max = 5;
    min = Math.ceil(min);
    max = Math.floor(max);
let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }

  console.log(getRandomInt());