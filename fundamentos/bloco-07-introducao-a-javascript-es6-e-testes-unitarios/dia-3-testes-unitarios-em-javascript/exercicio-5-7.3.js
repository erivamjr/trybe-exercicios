/* 5-Compare dois objetos para verificar se são idênticos ou não */
const assert = require('assert');

const obj1 = {
    title: 'My Title',
    description: 'My Description',
};

const obj2 = {
    description: 'My Description',
    title: 'My Title',
};

const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
};

// implemente seus testes aqui
const error = 'Esses objetos não são iguais!';

assert.deepStrictEqual(obj1, obj2, error);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);
