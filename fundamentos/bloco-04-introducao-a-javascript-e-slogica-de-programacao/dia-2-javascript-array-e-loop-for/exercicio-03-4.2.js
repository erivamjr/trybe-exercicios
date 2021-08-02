let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 2-Para o segundo exercício, some todos os valores contidos 
// no array e imprima o resultado;
let sum = 0;
let div = 0;
for (let show = 0; show < numbers.length; show++) {
    sum = sum + numbers[show];
    div = div + 1
}
console.log(sum / div);
