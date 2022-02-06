const readline = require('readline-sync');

const imc = './imc';
const sorteio = './sorteio';
const velocidade = './velocidade';

/* 8-Crie um arquivo index.js que pergunta qual script deve ser executado
        1-O script deve ser acionado através do comando npm start .
        2-Utilize o readline-sync para realizar o input de dados
        3-Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
        4-Ao digitar o número de um script e pressionar enter , o script deve ser executado.
        5-Você pode utilizar o require para executar o script em questão. */

const game = readline.question('Qual app usar?...Aperte os numeros correspondentes \n| 1 - Calcular imc | 2 - Calcular velocidade | 3 - Sorteio Adivinhar Numero = ');

if (game == 1) {
  require(imc);
}
if (game == 2) {
  require(velocidade);
}
if (game == 3) {
  require(sorteio);
}
if (game < 1 || game > 3) {
  console.log('Apenas numeros correspondentes 1, 2 ou 3!!');
}
