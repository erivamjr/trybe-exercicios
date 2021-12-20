
const fetchApi = async() => {
    const URL_API = 'https://api.coincap.io/v2/assets'
    
    try {
        const response = await fetch(URL_API);
        const data = await response.json();
        const arrayData = data.data
        return arrayData;
    }catch(error){
        console.log(`Algo deu errado :( \n${error}`);
    }
}
/* const listCripyto = async () => {
    const arrayCoins = await fetchApi();
    const listUl = document.createElement('ul'); // creating element ul
    arrayCoins
    .filter((el) => Number(el.rank) <= 10)
    .forEach((cripyto)=> {
        const listLi = document.createElement('li'); // creating element li
        const usdPrice = Number(cripyto.priceUsd);
        // console.log(cripyto);
        listLi.innerText = `${cripyto.name} (${cripyto.symbol}): ${usdPrice.toFixed(2)}`;
        // console.log(listLi);
        listUl.appendChild(listLi); // inserting in ul
    })
    document.body.appendChild(listUl);
} */

const listCripyto = async () => {
    const arrayCoins = await fetchApi();
    const tbody = document.querySelector('tbody');
    arrayCoins
    .filter((el) => Number(el.rank) <= 10)
    .forEach((cripyto)=> {
        const lineTr = document.createElement('tr'); // creating element tr
        const listTd = document.createElement('td'); // creating element li
        const usdPrice = Number(cripyto.priceUsd);
        listTd.innerText = `${cripyto.name} (${cripyto.symbol}): ${usdPrice.toFixed(2)}`;
        lineTr.appendChild(listTd); // inserting in tr
        tbody.appendChild(lineTr);
    })
}



window.onload = () =>{
    listCripyto();
};
