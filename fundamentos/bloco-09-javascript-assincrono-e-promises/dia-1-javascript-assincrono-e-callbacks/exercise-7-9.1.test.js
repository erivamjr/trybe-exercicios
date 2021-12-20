/* 7 - Escreva um teste que verifique a chamada da callback 
de uma função uppercase , que transforma as letras de uma 
palavra em letras maiúsculas. Lembre-se de ter cuidado 
com os falso-positivos em testes assíncronos. */

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Checks if the entered letter is capitalized', (done) => {
    uppercase('test', (str) => {
        try {
          expect(str).toBe('TEST');
          done();
        } catch (error) {
          done(error);
        }

      });
  })