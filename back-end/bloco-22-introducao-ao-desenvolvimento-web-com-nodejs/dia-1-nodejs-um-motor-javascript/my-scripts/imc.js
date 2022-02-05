
/* 
1- Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
    1-A fórmula para calcular o IMC é peso / altura ^ 2 . Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
    2-Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
    3-Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
    4-Armazene o script no arquivo imc.js . */
    const imcCalculator = (weight,height) => (weight / Math.pow(height, 2)).toFixed(2);
    
    console.log(imcCalculator(64,1.7));
    