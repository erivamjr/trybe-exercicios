/* 
1- Crie uma função que recebe três parâmetros retorna uma Promise .
    1-Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
    2-Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    3-Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    4-Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */

const multipliqueNumber = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return reject(new Error(`Informe apenas números`));
    }
    const result = (a + b) * c;

    if (result < 50) reject(new Error('Valor muito baixo'));

    return resolve(result);
  })

  return promise;
}
/*
2-Escreva um código para consumir a função construída no exercício anterior.
    1-Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
    2-Chame a função do exercício anterior, passando os três números aleatórios como parâmetros. */

const number1 = Number(Math.floor(Math.random() * 100 + 1));
const number2 = Number(Math.floor(Math.random() * 100 + 1));
const number3 = Number(Math.floor(Math.random() * 100 + 1));
console.log(number1, number2, number3);

/* 
3- Utilize then e catch para manipular a Promise retornada pela função:
    1-Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    2-Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
    3-Reescreva o código do exercício anterior para que utilize async/await .
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async . 
*/

/* multipliqueNumber(number1, number2, number3)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((error) => console.log(`erro: ${error}`)); */

const main = async () => {
  try {
    const result = await multipliqueNumber(number1, number2, number3)
    console.log(result);

  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();