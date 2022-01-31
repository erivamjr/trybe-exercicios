/*Desafios com DIV e MOD
Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 2 retorna resto 0.
1-Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.*/
SELECT IF (15 MOD 2 = 0, 'Par','Ímpar') AS 'Par ou Ímpar';
/*2-Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?*/
/*3-Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?*/