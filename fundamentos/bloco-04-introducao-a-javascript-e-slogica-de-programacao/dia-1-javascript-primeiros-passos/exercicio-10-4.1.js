/*10-Escreva um programa que se inicie com dois valores em duas constantes
 diferentes: o custo de um produto e seu valor de venda. A partir dos 
 valores, calcule quanto de lucro (valor de venda descontado o custo 
    do produto) a empresa terá ao vender mil desses produtos.

- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar 
caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda 
pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor 
de custo.

- valorCustoTotal = valorCusto + impostoSobreOCusto

- lucro = valorVenda - valorCustoTotal (lucro de um produto)*/
let valorCusto = 10; 
let valorVenda = 10;
let impostoSobreOCusto = 1.2;
let quantidade = 1000;

let valorCustoTotal = valorCusto * impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto > 0 && valorVenda > valorCusto){
    console.log('A empresa terá '+ lucro*1000+' ao vender mil desses produtos ');
}else{
    console.log('Valor de entrada deve ser Maior que 0 e valor de venda maior que valor de custo')
}
