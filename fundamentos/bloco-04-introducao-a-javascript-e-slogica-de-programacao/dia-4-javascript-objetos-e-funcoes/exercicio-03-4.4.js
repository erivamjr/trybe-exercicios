let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  /*2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o 
  valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

  info.recorrente = 'Sim';
  
  //3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

  for(let key in info){
      console.log(key);
  }