/*2- Para o segundo exercício, faça o mesmo que antes, 
mas que imprima um triângulo retângulo com 5 
asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****
3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
*/

let n = 5;
let caracter = '';

for (let cont = 0; cont < n; cont += 1) {
        caracter += '*';
        console.log(caracter);
}