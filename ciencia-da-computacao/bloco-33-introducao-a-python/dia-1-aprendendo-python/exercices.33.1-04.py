# Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno
# deve ser "Fernanda".
names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def getList(names):
    for name in names:
        if name == "Fernanda":
            print(name)


getList(names)
