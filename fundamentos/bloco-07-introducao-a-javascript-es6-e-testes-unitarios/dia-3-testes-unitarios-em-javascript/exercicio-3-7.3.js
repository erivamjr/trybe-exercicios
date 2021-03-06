const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
/* 
3- A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna 
o próprio array sem o elemento item caso ele exista no array

1-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) 
retorna o array esperado

2-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) 
não retorna o array [1, 2, 3, 4]

3-Faça uma chamada para a função myRemoveWithoutCopy e verifique 
se o array passado por parâmetro sofreu alterações

4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) 
retorna o array esperado 
*/
const list = [1,2,3,4];
const result = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expected = [1,2,4];
assert.deepStrictEqual(result, expected, 'O resultado tem que dar [1,2,4]');
const expected2 = [1,2,3,4];
assert.notDeepStrictEqual(result, expected2, 'O resultado não pode dar [1,2,3,4]');

myRemoveWithoutCopy(list, 1);
assert.strictEqual(list.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
