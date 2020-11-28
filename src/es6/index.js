function newFunction(name, age, country) {
  var name = name || 'JuanMany'
  var age = age || 22;
  var country = country || 'BG'
  console.log(name, age, country);
}

// es6 
function newFunction2(name = 'JuanMany', age = 24, country = 'BG') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('manuel', '42', 'CO');

// Template literals

let hola = 'hola';
let mundo = 'mundo';
let epicPhase = hola + ' ' + mundo;

console.log(epicPhase);

let epicPhase2 = `${hola} ${mundo}`;

console.log(epicPhase2);

let lorem = 'Qui consquatur. Commodi. Ipsum vel duis yet minima \n' + "otra frase epica que necesitamos."
// es6 
let lorem2 = `otra frace epica que necesitamos 
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);


//destructuracion literals

let person = {
  'name': 'juan',
  'age': '24',
  'email': 'juan.example@example.com'
}

let {name, age, email} = person;
console.log(name, age, email);  

let team1 = ['Oscar',  'Juan', 'Alex'];
let team2 = ['Valeria', 'Jessika', 'Valentina'];

// es6 
let education = ['David', ...team1, ...team2];

console.log(education);

let names = 'juan';
let ages = '24';

obj = { names: name, ages: age };
// es6 
obj2 = {names, ages};
console.log(obj2);

const names1 = [
  {names: 'John', ages: '24'},
  {names: 'Jane', ages: '23'},
]

let listOfNames = names1.map(function(item) {
  console.log(item.names);
})

let listOfNames2 = names1.map(item => console.log(item.names));

// const listOfNames3 = (names, age, country) => {
//   ...
// }

// const listOfNames4 = names1 => {
//   ...
// }

const square = num => num * num;

const helloPromise = () => {
  return new Promise(( resolve, reject) => {
    if (true) {
      resolve('Hey')
    }else{
      reject('Ups!!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(3,2));

  // import { hola } from './modules';

  // console.log(hola());

  function* helloWord() {
    if (true) {
      yield 'hello';
    }if (true) {
      yield 'Word';
    }
  }

  const generatorHello = helloWord();
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);

function* fibonacci() {
  let a = 0, b = 1;
  while (a !== Infinity) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (let value of fibonacci()) {
  console.log(value);
}