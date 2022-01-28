/*1-Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".*/
SELECT * FROM sakila.actor
WHERE first_name LIKE 'JULIA';

UPDATE sakila.actor
SET first_name = 'JULIES'
WHERE first_name = 'JULIA';
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.actor
WHERE first_name LIKE 'JULIES';

/*2-Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".*/
SELECT * FROM sakila.category;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.category
WHERE name = 'Science Fiction';
/*3-Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.*/
SELECT * FROM sakila.film
WHERE replacement_cost > 20 AND length > 100 AND rating <> 'NC-17';
UPDATE sakila.film
SET replacement_cost = 25
WHERE replacement_cost > 20 AND length > 100 AND rating <> 'NC-17';
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.film
WHERE replacement_cost = 25 AND length > 100 AND rating <> 'NC-17';
/*4-Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.*/