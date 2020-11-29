// Operador de reposo
  const obj = { 
    name: 'juan',
    age: 24,
    country: 'CO'
  }

  let { name, ...all } = obj;
  console.log(name, all);

  // Union de obj a un nuevo obj

  const obj2 = { 
    name: 'juan',
    age: 24
  }
  const obj1 = {
    ...obj2,
    country: 'CO'
  }

console.log(obj1);

const helloWord = () => {
  return new Promise((resolve, reject) => {
    (true) 
    ? setTimeout(()=>resolve('hello world'), 3000)
    : reject(new Error('Test ERror'))
  })
}

helloWord()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'))

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day);