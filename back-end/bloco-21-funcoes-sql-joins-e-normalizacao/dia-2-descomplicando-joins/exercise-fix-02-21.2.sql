SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;
-- 1-Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
SELECT
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS 'Nome da Pessoa Colaboradora',
CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS 'Nome Gerente'
FROM hr.employees AS E
INNER JOIN
hr.employees AS M ON E.MANAGER_ID = M.EMPLOYEE_ID
WHERE E.DEPARTMENT_ID <> M.DEPARTMENT_ID;
-- 2-Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.