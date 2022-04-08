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

/* class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo: string;

  constructor(b: string, s: number, r: number, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`${this.brand} ${this.size} ${this.resolution} ${this.connections}`);
  }
}

const tv1 = new Tv('LG', 55, 1920, ['HDMI', 'Ethernet']);
const tv2 = new Tv('Philco', 65, 1980, ['HDMI', 'Ethernet', 'USB']);
console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);
console.log(tv2.brand, tv2.size, tv2.resolution, tv2.connections);

tv1.turnOn();
tv2.turnOn(); */

// Utilizando o mesmo código dos exercícios de fixação anteriores:
// 5 - Altere a visibilidade dos atributos definidos na classe Tv para private .
// 6 - Crie um método getter e um setter para o atributo _connectedTo , da classe Tv.
//    * O setter deverá verificar se o valor definido está entre as conexões disponíveis ( _connections ) e:
//    * Em caso positivo, definir este valor para o atributo _connectedTo ;
//    * Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
// 7 - Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connectedTo: string) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = ['HDMI', 'WIFI', 'USB', 'BLUETOOTH', 'ETHERNET', '3G', '4G', '5G'];
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log(`Marca: ${this._brand} Polegadas: ${this._size} Rsolução: ${this._resolution} Conexões: ${this._connectedTo}`);
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Sony', 40, 1080, 'REDE')
const tv2 = new Tv('Sansung', 32, 1080, 'USB')

tv1.connectedTo = "WIfI";
