const { TestWatcher } = require('@jest/core');
const uppercase = require('./exercise-1-10.2');
// fazendo o it e colocando o Done para esperar a função async
it('uppercase "test" to equal "TEST"', (done) => {
// inicializando com test para retornar TEST    
    uppercase('test', (str) => {
        // caso de certo retorne true
      try {
        expect(str).toBe('TEST');
        done(); // esperar até terminar
        //caso de errado retornar error
      } catch (error) {
        done(error); // esperar até terminar
      }
    });
  });