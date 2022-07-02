"""
Exercício 6: Crie uma função que receba os três lado de um triângulo e
informe qual o tipo de triângulo formado ou "não é triangulo", caso não
seja possível formar um triângulo.

  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes."""


def infoTypeTriangle(a, b, c):
    if a >= b+c or b >= c+a or c >= a+b:
        print("Triângulo Invalido")
        quit()
    if a == b == c:
        print("Triângulo Equilátero: três lados iguais")
    elif a == b or b == c or c == a:
        print("Triângulo Isósceles: quaisquer dois lados iguais")
    elif a != b != c:
        print("Triângulo Escaleno: três lados diferentes")


infoTypeTriangle(5, 3, 1)
