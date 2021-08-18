//1 - Crie um objeto player contendo as variáveis listadas abaixo.
/*let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };*/
//let telefone = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1];

// function gerarNumeros(numbers) {
//     let aux = 0;
//     let cont = -1;
//     let numeroTelefone = '(';

//     if (numbers.length !== 11) {// verificando se o array é maior que 11
//         return 'Array com tamanho incorreto.';
//     }

//     for (let key in numbers) {
//         if (numbers[key] < 0 || numbers[key] > 9) {// verificando se tem numbers menor que zero OU maior que 9
//             return 'não é possível gerar um número de telefone com esses valores';
//         } else {
//             aux = 0;
//             for (let index in numbers) {// verificando se tem mais que 2 numbers repitidos

//                 if (numbers[key] === numbers[index]) {
//                     aux += 1;
//                     if (aux > 2) {
//                         return 'não é possível gerar um número de telefone com esses valores';
//                     }

//                 }

//             }
//         }

//         cont += 1;
//         // condição para colocar () e - .
//         if (cont === 2) {
//             numeroTelefone += ') ';
//         }
//         if (cont === 7) {
//             numeroTelefone += '-';
//         }

//         numeroTelefone += numbers[key];
//     }
//     return numeroTelefone;
// }
// console.log(gerarNumeros(telefone));

// function checarTriangulo(lineA,lineB,lineC) {

//     if(lineA < lineB+lineC && lineB < lineA+lineC && lineC < lineA+lineB){
//         if(lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)){
//             return true;
//         }
//     } else{
//         return false;
//     }

//     }
//     console.log(checarTriangulo(10,14,8));
let h2o = "1 cachaça, 5 cervejas e 1 copo de vinho";
function hidrate(phrase) {
let reg = /\d+/g;
let qtd = [];
let aux = 0;
    let beberAgua = phrase.match(reg);
    for(key in beberAgua){
qdt = qtd.push(parseInt(beberAgua[key]));
    }
    for(index in qtd){
        aux += qtd[index];
    }

    return aux + ' copos de água';
}
console.log(hidrate(h2o));
// let player = {
//     name:'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }

// };

/*2 - Acesse as chaves name , lastName e age e concatene as suas
informações para imprimir no console uma mensagem no seguinte
formato: "A jogadora Marta Silva tem 34 anos de idade".*/

//console.log('O meu nome é ' +player.name+ ' e sobrenome é ' + player.lastName + ' com idade de ' + player.age);

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   console.log(car);

// function techList(['HTML', 'JAVASCRIPT', 'CSS', 'JAVA', 'GITHUB'], 'Junior') {
//     // seu código aqui
//     techList.sort(function (a, b) {

//         return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);

//     });

//     // let techAux = tech.sort();
//     // let listObject = {};
//     // for (let i = 0; i < techAux.length; i += 1) {
//     //   if (techAux == '') {
//     //     listObject.tech = 'Vazio!';
//     //   } else {
//     //     listObject.tech = techAux[i];
//     //   }
//     //   listObject.name = name;


//     // }
//     // return listObject;
// }
// console.log(techList());
// console.log(techList(['HTML', 'JAVASCRIPT', 'CSS', 'JAVA', 'GITHUB'], 'Junior'))

//   techList = ['HTML', 'JAVASCRIPT', 'CSS', 'JAVA', 'GITHUB'];
//   let techAux = techList.sort();

//   console.log(techList.sort());

// var frutas = [{
//     fruta: 'Banana',
//     nome:'Junior'
// },
// {
//     fruta: 'Maça',
//     nome:''
// },
// {
//     fruta: 'Pera',
//     nome:''
// },
// {
//     fruta: 'Amora',
//     nome:''
// }];
// frutas.nome = 'Junior';
// frutas.sort(function (a, b) {

//     return (a.fruta > b.fruta) ? 1 : ((b.fruta > a.fruta) ? -1 : 0);

// });
// console.log(frutas);