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
// fazendo um for geral
for (let i = 1; i <= n; i++) {
        //zera a linha novamente
        let line = '';
        // esse for adiciona os espaços
        for (let s = 0; s < n - i; s++) {
                line += ' ';
        }
        // esse for adiciona o asteristico
        for (let c = 0; c < i; c++) {
                line += '*';
        }
        //imprime a junção dos espaços junto com asteristicos
        console.log(line);
}