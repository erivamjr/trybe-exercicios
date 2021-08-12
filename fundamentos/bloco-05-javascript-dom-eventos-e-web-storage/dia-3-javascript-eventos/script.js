function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth(diasArray) {
    //pegar o valor do id
    let elementoDias = document.querySelector('#days');
    // criando os dias
    for (let i = 0; i < diasArray.length; i += 1) {
        let recebeDia = diasArray[i];
        let li = document.createElement('li');
        li.innerHTML = recebeDia;
        elementoDias.appendChild(li);// adicionando a variavel li no elemento dias
        li.className = 'day';
        //Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
        if (recebeDia === 24 || recebeDia === 25 || recebeDia === 31) {
            li.classList.add('holiday');
        }
        //Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
        if (recebeDia === 4 || recebeDia === 11 || recebeDia === 18 || recebeDia === 25) {
            li.classList.add('friday');
        }
    }

}

createDaysOfMonth(dezDaysList);

function creatButton() {
    let div = document.querySelector('.buttons-container');// recebe a div
    let botao = document.createElement('button');// criando botao
    botao.innerText = 'Feriados';// criando texto do botao
    div.appendChild(botao); // adicionando botao a div
    botao.id = 'btn-holiday';
}

creatButton();