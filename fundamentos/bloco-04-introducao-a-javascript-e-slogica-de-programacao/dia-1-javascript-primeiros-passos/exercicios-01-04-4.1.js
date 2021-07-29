// 1-Faça cinco programas, um para cada operação aritmética básica. 
//Seu programa deve ter duas variáveis, a e b , definidas no começo 
//com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
let a = 10;
let b = 10;

let adicao = a + b;
console.log(adicao);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let divisao = a / b;
console.log(divisao);
let modulo = a % b;
console.log(modulo);

// 2-Faça um programa que retorne o maior de dois números. Defina no 
//começo do programa duas variáveis com os valores que serão comparados.

if (a > b){
    console.log(a);
}else if(a < b){
    console.log(b);
}else{
    console.log('Os numeros são iguais!')
}

// 3-Faça um programa que retorne o maior de três números. Defina no começo 
// do programa três variáveis com os valores que serão comparados.
let c = 15;
if (a > b && a > c){
    console.log(a);
}else if(b > a && b > c){
    console.log(b);
}else if(c > a && c > b){
    console.log(c);
}else{
    console.log('Os numeros são iguais!');
}

// 4-Faça um programa que, dado um valor definido numa variável, retorne 
// "positive" se esse valor for positivo, "negative" se for negativo e 
// "zero" caso contrário.

if (a > 0){
    console.log('Positivo')
}else if (a < 0){
    console.log('Negativo')
}else{
    console.log('Valor é 0!')
}



