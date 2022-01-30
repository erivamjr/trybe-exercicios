/*1-Exclua do banco de dados o ator com o nome de "KARL".*/
SELECT actor_id FROM sakila.actor
WHERE first_name LIKE 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

/*2-Exclua do banco de dados os atores com o nome de "MATTHEW".*/
/*3-Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.*/
/*4-Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .*/
/*5-Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).*/
/*6-Exclua o banco de dados e o recrie (use as instruções no início desta aula).*/