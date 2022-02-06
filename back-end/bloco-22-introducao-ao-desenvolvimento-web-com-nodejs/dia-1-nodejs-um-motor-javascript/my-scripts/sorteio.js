const readline = require('readline-sync');

/*7-Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
        1-O script deve ser executado através do comando npm run sorteio .
        2-Utilize o readline-sync para realizar input de dados.
        3-Armazene o script em sorteio.js .
        4-O número gerado deve ser um inteiro entre 0 e 10.
        5-Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
        6-Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".*/

const randomGenerator = () => {
    let condition = 's'
    
    while (condition.toLocaleLowerCase().includes('s')){
    
        const number = readline.questionInt('Insira um numero de 1 a 10? ');
        const randomNumber = Math.floor(Math.random() * 1);
        if(number == randomNumber){
            console.log(`Parabéns, número correto!`); 
        }else{
            console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
        }
        condition = readline.question('Deseja jogar novamente, sim ou não? ');          
    }
    return 'Tudo bem, Obrigado!';
};

module.exports = randomGenerator();
