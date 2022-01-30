/*1-Exclua do banco de dados o ator com o nome de "KARL".*/
SELECT actor_id FROM sakila.actor
WHERE first_name LIKE 'KARL';

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- verificando se foi mesmo apagado
SELECT * FROM sakila.actor
WHERE actor_id LIMIT 15 OFFSET 10;

/*2-Exclua do banco de dados os atores com o nome de "MATTHEW".*/
SELECT * FROM sakila.actor
WHERE first_name LIKE 'MATTHEW';

SET SQL_SAFE_UPDATES = 0;
-- verificando se foi mesmo removido
DELETE FROM sakila.film_actor
WHERE actor_id IN (8,103,181);

DELETE FROM  sakila.actor
WHERE first_name LIKE 'MATTHEW';

SELECT * FROM sakila.actor
WHERE actor_id LIMIT 10;

/*3-Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.*/
SELECT * FROM sakila.film_text
WHERE description LIKE '%saga%';

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

/*4-Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .*/
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
/*5-Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).*/
-- NÃO REQUER CÓDIGO
/*6-Exclua o banco de dados e o recrie (use as instruções no início desta aula).*/
-- NÃO REQUER CÓDIGO