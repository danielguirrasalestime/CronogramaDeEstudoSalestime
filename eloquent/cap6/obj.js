let rabbit = {};
//Em objetos podem ser atribuidos methodos seja eles funções ou qualquer coisa
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

rabbit.love = function (text) {
  console.log(`Coelho ama muito ${text}`);
};

rabbit.love("Pudim");
//Coelho ama muito Pudim

console.log(rabbit);
//{ speak: [Function] }

function speak(line) {
  console.log(`O coelho ${this.type}  disse '${line}'`);
}
let coelhoBranco = { type: "branco", speak }; //Pode atribuir de tudo
let coelhoComFome = { type: "fomaminto", speak };

coelhoBranco.speak("Olhe minhas orelhas fofinhas, " + "Isso é tão bom!");
//Como a função foi atribuida na declaração da variavel coelhoBranco é possivel usala pelo .speak
//  Sua saida seria
//O coelho branco  disse 'Olhe minhas orelhas fofinhas, Isso é tão bom!'
coelhoComFome.speak("Voce poderia me dar uma cenoura agora.");
// O mesmo se aplica a essa como .speak foi declarado na coelhoComFome é possivel usala
// saida
//O coelho fomaminto  disse 'Voce poderia me dar uma cenoura agora.'

speak.call(coelhoComFome, "Opa");
//Usando  metodo call pode invocar a function dentro do coelhoComFome e da mesma maneira passar o atributo

// saida
//O coelho fomaminto  disse 'Opa

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

let protoRabbit = {
  speak(line) {
    console.log(`O  coelho ${this.type} diz '${line}'`);
  },
};
let happyRabbit = Object.create(protoRabbit);
happyRabbit.type = "feliz";
happyRabbit.speak("SKREEEE!");
// O  coelho feliz diz 'SKREEEE!'

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");

let blackRabbit = new Rabbit("black").speak("aaaaaaaa");
//The black rabbit says 'aaaaaaaa'

Rabbit.prototype.teeth = "small"; //se não expecificar é passado para todos o mesmo valor que no caso é small
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

let teste = {
  banana: "banana",
};
console.log("banana" in teste); //console.log(in) verifica se está no objeto
//true
console.log("pudim" in teste);
//false

let ages = new Map();
ages.set("Roberto", 29);
ages.set("Adalberto", 75);

console.log(`Roberto tem ${ages.get("Roberto")} anos`);
//Roberto tem 29 anos
console.log(`Roberto está na map`, ages.has("Roberto"));
//true
console.log(`Tulio está na map`, ages.has("Tulio"));
//false

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
} //Math.sqrt retorna raiz do numero

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
