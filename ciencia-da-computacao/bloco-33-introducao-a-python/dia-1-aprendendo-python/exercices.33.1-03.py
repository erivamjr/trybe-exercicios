# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na
# tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
# n = 5
# *****
# *****
# *****
# *****
# *****

def asterisks(n):
    if n > 1:
        for i in range(n):
            print(n)
            print("*" * n)
    else:
        print('Number have to be greater than 1')


asterisks(1)
