let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let arrayNum = [1,2,3,4,5];
console.log(arrayNum.flatMap(value => [value, value * 2]));

let hello = '                      hello world';

console.log(hello);

console.log(hello.trimStart()); // inicio del texto del

let hello2 = 'hello world                             ';
console.log(hello2)

console.log(hello2.trimEnd()); // fin del texto

try {
  
} catch {
  error
}


let entries = [["name", "juan"], ["age", 24]];
console.log(Object.fromEntries(entries))

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
