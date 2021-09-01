const assert = require('assert');
const exp = require('constants');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

/* 
1-A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    3-Verifique se o array passado por parâmetro não sofreu alterações
    4-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
const result = myRemove([1, 2, 3, 4], 3);
const expected = [1, 2, 4];
//A igualdade deepStrictEqual (também conhecida como estrutural), por outro lado, não testa se os operandos são o mesmo objeto, mas sim se são equivalentes. 
assert.deepStrictEqual(result, expected, 'O resultado tem que dar [1,2,4]');

assert.notDeepStrictEqual(result, [1, 2, 3, 4], 'Não pode ser [1, 2, 3, 4]');

result = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(result, [1, 2, 3, 4]);


console.log(result);