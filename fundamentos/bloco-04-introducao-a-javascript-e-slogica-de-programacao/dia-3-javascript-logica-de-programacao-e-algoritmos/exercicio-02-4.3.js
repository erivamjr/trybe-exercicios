/*1- Para o primeiro exercício de hoje, faça um 
programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de 
lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/

let n = 5;
let caracter = '';

for (let cont = 0; cont < n; cont += 1) {
    //for (let index = 0; index < n; index += 1) {
        caracter += '*';
        console.log(caracter);
    //}
    //console.log('');
}