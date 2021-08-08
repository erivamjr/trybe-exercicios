let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  /*2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o 
  valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

  info.recorrente = 'Sim';
  
  //4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:  
  for(let key in info){
  console.log(info[key]);    
  }

  