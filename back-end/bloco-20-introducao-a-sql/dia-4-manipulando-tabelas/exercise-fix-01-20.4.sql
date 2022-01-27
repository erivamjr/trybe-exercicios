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

SELECT * FROM staff;