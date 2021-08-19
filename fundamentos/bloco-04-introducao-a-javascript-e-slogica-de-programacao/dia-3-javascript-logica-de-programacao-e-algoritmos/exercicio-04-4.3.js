/*4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****
*/





let n = 5;
let line = '';
// fazendo um for geral
for (let i = 1; i <= n; i++) {
        //zera a linha novamente
        line = '';
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