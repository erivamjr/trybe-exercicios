const sum = require('./exercise-01-10.1');
describe('sum', () => {
  // 1-Teste se o retorno de sum(4, 5) é 9
  test('sums two values 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  // 2-Teste se o retorno de sum(0, 0) é 0
  test('sums two values 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // 3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('throw an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  // 4-Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});