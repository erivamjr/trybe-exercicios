let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 6-Descubra quantos valores ímpares existem no 
// array e imprima o resultado. Caso não exista nenhum, 
// imprima a mensagem: "nenhum valor ímpar encontrado";


let resul = [];
let aux = 0;
for (let show = 0; show < numbers.length; show++) {
    if (numbers[show] % 2 !== 0) {
        resul.push(numbers[show]);
        aux = aux + 1;
    }
}

if (aux === 0) {
    console.log('nenhum valor impar encontrado')
} else {
    console.log(resul);
}

