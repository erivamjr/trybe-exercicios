/*
4- Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
    * Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    1-Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
    2-Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
    3-Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
    4-Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
    5-Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
    6-Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .*/

const fs = require('fs').promises;

const simpsons = './simpsons.json';

const mainList = async () => {
  console.log('Exercicio - 01');
  try {
    const file = await fs.readFile(simpsons, 'utf8');
    const data = await JSON.parse(file)
    // console.log(data);
    data.map((el) => console.log(`${el.id} - ${el.name}`));


  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}
mainList();

const mainFind = async (id) => {
  const simpsons = './simpsons.json';
  console.log('Exercicio - 02');
  //Thanks for joining the GitHub Copilot waitlist! You've been added to the waitlist for the GitHub Copilot technical preview! No need to do anything else—we'll let you know when you can start using it. Just make sure your primary email address is up-to-date!

  const file = await fs.readFile(simpsons, 'utf8');
  const data = await JSON.parse(file);
  const findSimpson = data.find((el) => Number(el.id) === id);
  if (!findSimpson) {
    throw new Error('id não encontrado!')
  }
  console.log(`${findSimpson.id} - ${findSimpson.name}`);
}

mainFind(3);

/* 4-Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4. */

const mainAdd = async () => {

  try {
    const simpsons = './simpsons.json';

    const file = await fs.readFile(simpsons, 'utf8');
    const data = await JSON.parse(file);
    const newFile = data.filter((el) => Number(el.id) <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFile));
  } catch (err) {
    console.log('Deu errado boca de balde!');
  }
}

mainAdd();
