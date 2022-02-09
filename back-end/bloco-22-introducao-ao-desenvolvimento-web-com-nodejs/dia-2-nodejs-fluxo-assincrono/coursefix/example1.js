const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});

//Exemplo 1: Tratando erros de forma síncrona.
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

//Exemplo 2: Tratando erros de forma assíncrona.
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

/*No segundo exemplo, repare que a função dividirNumeros retorna uma Promise, ou seja: ela promete que vai dividir os números. Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando a função reject . Caso dê tudo certo, ela resolve a promessa, utilizando a função resolve . Tudo que será realizado de forma assíncrona , ou seja, em segundo plano, pode também ser encarado da mesma forma. Quando pedirmos, por exemplo, para o que o Node.js leia um arquivo do disco, ele nos retornará uma promessa de que vai ler esse arquivo. Se der tudo certo, essa promessa será resolvida. Caso contrário, ela será rejeitada.
*/