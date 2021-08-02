let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 4-Com o mesmo código do exercício anterior, caso o valor 
// final seja maior que 20, imprima a mensagem: "valor 
// maior que 20". Caso não seja, imprima a mensagem: "valor 
// menor ou igual a 20";

let sum = 0;
let div = 0;
let resul = 0;
for (let show = 0; show < numbers.length; show++) {
    sum = sum + numbers[show];
    div = div + 1
}
resul = sum / div;
if (resul > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20')
}

