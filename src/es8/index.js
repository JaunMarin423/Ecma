// // Devolver claves de una matris

// const data = {
//   fronted: 'Oscar',
//   backend: 'Isabel',
//   design: 'Ana',
// }


// const entries = Object.entries(data);
// console.log(entries);
// console.log(entries.length);

// prueba de git

const data = {
  fronted: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
}

const values = Object.values(data);
console.log(values);


const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----------------'))

const helloWord = () => {
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWord();
  console.log(hello);
}

helloAsync();