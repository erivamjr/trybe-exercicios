/*1-Monte uma query que exiba seu nome na tela;*/
SELECT 'José';
/*2-Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;*/
SELECT 'José', 'Erivam', 'Rondonópolis', 37;
/*3-Monte uma query que, além de exibir todas as informações já mencionadas, identifique 
cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);*/
SELECT 'José' AS nome, 'Erivam' AS sobrenome, 'Rondonópolis' AS cidade_natal, 37 AS idade;
/*4-Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;*/
SELECT 13 * 8;
/*5-Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".*/
SELECT NOW() AS data_atual;

