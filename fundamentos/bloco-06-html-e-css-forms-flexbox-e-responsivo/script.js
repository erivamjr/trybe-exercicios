let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
let selectEstados = document.getElementsByTagName('select')[0];
let optionSiglas = document.createElement('option');

//criando o laço de repetição para as inserir o option e seu conteudo
for (let i in estados) {
    let optionSiglas = document.createElement('option'); //  criando o elemento
    optionSiglas.setAttribute('value', estados[i]); // criando o atributo value e dando valor
    optionSiglas.setAttribute('requerid', 'requerid'); // campo obrigatorio
    optionSiglas.innerText = estados[i]; // option =  array estados
    selectEstados.appendChild(optionSiglas); // inserindo filho(option) no pai (select)
}
// codigo base pegado do artigo do Bruno Nunes e adaptado
//http://maozinhadaweb.blogspot.com/2007/05/mscara-de-data-com-javascript_14.html


// && parseInt(dia) > 0 && parseInt(dia) <= 31)
function mascaraData() {
    let data = document.querySelector('#data');
    let dia = data.value[0] + data.value[1];
    let mes = data.value[3] + data.value[4];
    let diaN = parseInt(dia);
    let mesN = parseInt(mes);

    if (diaN > 0 && diaN <= 31) {
        if (data.value.length == 2) {
            data.value = data.value + '/';
        }

    } else {
        window.alert('Dia maior que 0 e menor ou igual a 31');
    }



    if (data.value.length == 5) {
        if (mesN > 0 && mesN <= 12) {
            if (data.value.length == 5) {
                data.value = data.value + '/';
            }

        } else {
            window.alert('Mês maior que 0 e menor que 12');
        }
    }

}

