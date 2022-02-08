/* 
1- Crie uma função que recebe três parâmetros retorna uma Promise .
    1-Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
    2-Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    3-Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    4-Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */

const multipliqueNumber = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof (a) !== "number" || typeof (b) !== "number" || typeof (c) !== "number") {
      return reject(new Error(`Informe apenas números`));
    }
    const result = (a + b) * c;

    if (result < 50) reject(new Error('Valor muito baixo'));

    return resolve(result);
  })

  return promise;
}

const number1 = Number(Math.floor(Math.random() * 100 + 1));
const number2 = Number(Math.floor(Math.random() * 100 + 1));
const number3 = Number(Math.floor(Math.random() * 100 + 1));
console.log(number1, number2, number3);
multipliqueNumber(number1, number2, number3)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((error) => console.log(`erro: ${error}`));
