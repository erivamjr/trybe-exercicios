/*1-Escreva uma query que exiba todos os filmes cadastrados no banco de dados.*/
SELECT * FROM sakila.film;
/*2-Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .*/
SELECT title, release_year, rating FROM sakila.film;
/*3-Quantos filmes temos cadastrados?*/
SELECT COUNT(title) FROM sakila.film;
/*Para os exercícios a seguir, vamos usar a tabela sakila.actor*/
SELECT * FROM sakila.actor;
/*4-Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.*/
SELECT last_name FROM sakila.actor
ORDER BY last_name;
/*5-Quantos sobrenomes únicos temos na tabela?*/
SELECT DISTINCT COUNT(last_name) FROM sakila.actor;
/*6-Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.*/
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;
/*7-Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .*/
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
/*8-Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?*/
SELECT * FROM sakila.film;
/*9-
Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, 
incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo 
de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.*/
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film 
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
