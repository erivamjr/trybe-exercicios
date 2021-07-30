let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 5-Utilizando for , descubra qual o maior valor contido
//  no array e imprima-o;

let resul = 0;
for (let show = 0; show < numbers.length; show++) {
    if (resul < numbers[show]) {
        resul = numbers[show];
    }
}

console.log(resul);