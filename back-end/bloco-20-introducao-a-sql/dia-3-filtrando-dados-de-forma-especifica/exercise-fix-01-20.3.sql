/*1-Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org 
. As informações podem ser encontradas na tabela customer*/
SELECT * FROM sakila.customer
WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';
/*2-Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão 
mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente 
KENNETH no resultado. As informações podem ser encontradas na tabela customer*/
SELECT * FROM sakila.customer
WHERE store_id = 2 AND active IS NOT true
ORDER BY first_name;
/*3-O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de 
substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do 
valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o 
custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem 
alfabética pelo título. As informações podem ser encontradas na tabela film*/
SELECT title, description, replacement_cost, rating FROM sakila.film
WHERE replacement_cost >= 18.00 AND (rating = 'PG' OR rating = 'PG-13')
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;
/*4-Quantos clientes estão ativos e na loja 1 ? As informações podem ser encontradas na 
tabela customer*/
SELECT COUNT(store_id = 1 AND active IS true) FROM sakila.customer;
/*5-Mostre todos os detalhes dos clientes que não estão ativos na loja 1 . As informações 
podem ser encontradas na tabela customer*/
SELECT * FROM sakila.customer
WHERE store_id = 1 AND active IS NOT true;
USE sakila;
-- **Solução:**
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;