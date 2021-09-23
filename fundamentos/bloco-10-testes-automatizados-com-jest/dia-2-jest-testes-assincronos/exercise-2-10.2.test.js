/* 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */
const getUserName = require('./exercise-2-10.2');

describe('testing user existence', () => { // describe function
    // inserting test of the function
    it('looking for user true', () => {
        // at least one positive result
        getUserName(1).then((user) => {
            expect(user).toEqual('Mark');
        });
    });
    // inserting test of the function
    it('User does not exist', () => {
        getUserName(3).catch((error) => {
            expect(error).toEqual(new Error(`User with ${3} not found.`))
        });
    });
});

/* describe('testing user existence', () => { // describe function
}); */