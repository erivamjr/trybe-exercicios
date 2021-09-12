const assert = require('assert');

// escreva sum abaixo
// passado a função para uma variavel, fazendo o reduce somando todos os valores
// codigo estudado do e usado como exemplo do conteudo de parametro rest
const sum = (...args) => args.reduce((acumulator, current) => acumulator + current, 0);


//console.log(sum(1, 2, 7, 5));

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);