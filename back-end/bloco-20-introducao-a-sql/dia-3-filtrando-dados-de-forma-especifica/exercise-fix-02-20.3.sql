/*1-Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.*/
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
/*2-Mostre todos os detalhes dos filmes cujas descrições finalizam com china .*/
SELECT * FROM sakila.film
WHERE description LIKE '%china';
/*3-*/