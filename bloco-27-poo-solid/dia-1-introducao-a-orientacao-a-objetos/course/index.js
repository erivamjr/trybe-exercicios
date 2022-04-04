var Person = /** @class */ (function () {
    function Person(n, h, w) {
        console.log("Creating person ".concat(n));
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, ": zzzzzzz"));
    };
    return Person;
}());
var p1 = new Person('Maria', 171, 58);
var p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/
/*
Utilizando o que você já aprendeu até aqui, faça os seguintes exercícios:
1 - Crie uma classe chamada Tv, com os atributos:
- brand : marca da TV;
size: tamanho em polegadas;
resolution: resolução da tela;
connections: conexões disponíveis(HDMI, Ethernet, etc.);
connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
 */
var Tv = /** @class */ (function () {
    function Tv(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    Tv.prototype.turnOn = function () {
        console.log("".concat(this.brand, " ").concat(this.size, " ").concat(this.resolution, " ").concat(this.connections));
    };
    return Tv;
}());
