/*1-Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.*/
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
/*2-Mostre todos os detalhes dos filmes cujas descrições finalizam com china .*/
SELECT * FROM sakila.film
WHERE description LIKE '%china';
/*3-Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o 
título finaliza com a palavra lord .*/
SELECT * FROM sakila.film
WHERE description LIKE '%china%' AND title LIKE '%lord';
