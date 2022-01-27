/*1-Insira um novo funcionário na tabela sakila.staff .*/
USE sakila;
INSERT INTO staff (
first_name, 
last_name, 
address_id,
email, 
store_id, 
active, 
username,
password
) VALUES ('José','Erivam',2,'erivam@hotmail.com',1,0,'junior', '123456');

/*2-Feito o exercício anterior, vamos agora para o nível 2. Insira dois 
funcionários novos em apenas uma query .*/
INSERT INTO staff (
first_name, 
last_name, 
address_id,
email, 
store_id, 
active, 
username,
password
) VALUES ('Geiza','Maia',2,'geiza@hotmail.com',1,0,'geiza', '123456'),
('Davi','Ferreira',2,'davi@gmail.com',1,0,'mileras','123456');

/*3-Selecione os cinco primeiros nomes e sobrenomes da tabela 
sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .*/
INSERT INTO actor (first_name, last_name) -- tabela com as colunas onde sera inserido
SELECT first_name, last_name FROM customer -- selecionando as colunas a serem copiadas
ORDER BY customer_id 
LIMIT 5;

/*4-Cadastre três categorias de uma vez só na tabela sakila.category .*/

INSERT IGNORE INTO category (name) VALUES
('Rafael'),
('Amanda'),
('Fernando');
SELECT * FROM category;