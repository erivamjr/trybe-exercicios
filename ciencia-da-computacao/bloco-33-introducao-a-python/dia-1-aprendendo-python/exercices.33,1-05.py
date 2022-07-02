"""Exercício 5: Considere que a cobertura da tinta é de
1 litro para cada 3 metros quadrados e que a tinta é vendida
em latas de 18 litros, que custam R$ 80,00. Crie uma função
 que retorne dois valores em uma tupla contendo a quantidade
 de latas de tinta a serem compradas e o preço total a partir
 do tamanho de uma parede(em m²).
 1 ---- 3
 18 --- m2
 x = m3/3
 """


def coverToPaint(m2: float):
    liters = round(m2/3/18, 2)
    priceLiters = round(liters * 80.00, 2)

    print((liters, priceLiters))


coverToPaint(30)
