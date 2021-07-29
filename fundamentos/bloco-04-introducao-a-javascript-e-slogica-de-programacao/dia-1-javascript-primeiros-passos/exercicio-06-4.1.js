// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
let peca = 'peão';

switch (peca) {
    case 'peão':
        console.log('Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.');
        break;
    case 'torre':
        console.log('Se movimentam em linha reta ou para os lados, por todas as casas.');
        break;
    case 'cavalo':
        console.log('Se movimenta em L.');
        break;
    case 'bispo':
        console.log('Se movimenta somente na diagonal por todo o tabuleiro.');
        break;
    case 'rainha':
        console.log('Pode se movimentar para qualquer lado e direção.');
        break;
    case 'rei':
        console.log('Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.');
        break;
    default:
        console.log('Digite peão, torre, cavalo, bispo, rainha ou rei para entrada valida!');
}
