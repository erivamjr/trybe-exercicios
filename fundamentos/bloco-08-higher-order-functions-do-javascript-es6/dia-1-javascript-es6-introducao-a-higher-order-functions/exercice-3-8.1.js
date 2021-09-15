/* 
3 - Crie uma HOF que receberá três parâmetros. O primeiro 
será um array de respostas corretas (Gabarito), o segundo 
será um array de respostas a serem verificadas (respostas 
da pessoa estudante) e o terceiro é uma função que checa 
se as respostas estão corretas e faz a contagem da 
pontuação final recebida pela pessoa estudante. Ao final 
a HOF deve retornar o total da contagem de respostas certas.

Quando a resposta for correta a contagem sobe 1 ponto, quando 
for incorreta desce 0.5 pontos, e quando não houver resposta 
("N.A") não altera-se a contagem. 
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
checkAnswer = (rightAnswers, studentAnswers, action) => {
    let count = 0;
    for(let i = 0; i < rightAnswers.length; i+=1){
        const returnAction = action(rightAnswers[i], studentAnswers[i]);
        count = count + returnAction;
    }
    return count;
};;
console.log(checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswers,studentAnswers)=> {

    if(rightAnswers === studentAnswers){
       return  1;
    } 
    if(studentAnswers === 'N.A'){
        return 0;
    }
        return -0.5;
    
}));
