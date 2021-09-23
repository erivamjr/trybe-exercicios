const getUserName = require("./exercise-3-10.2");
/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro. */
describe('testing user existence', () => { // describe function
    // inserting test of the function
    it('looking for user true', () => {
        // at least one positive result
        try {
            getUserName(1).then((user) => {
                expect(user).toEqual('Mark');
            });
        } catch {
            getUserName(3).catch((error) => {
                expect(error).toEqual(new Error(`User with ${3} not found.`))
            });
        }
    });
});