function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// implemente seus testes aqui
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

