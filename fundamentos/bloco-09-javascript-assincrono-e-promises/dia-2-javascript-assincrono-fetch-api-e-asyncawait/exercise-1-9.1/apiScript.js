
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };
  // Adicionar lógica aqui!
  // console.log('entrou!');
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => document.getElementById('jokeContainer').innerText = data.joke)
  .catch((error) => console.log(`Algo deu errado :( \n${error}`));
};

window.onload = () => fetchJoke();