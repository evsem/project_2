console.log('Hello JS.')

let arrawF = (text_0) => console.log(`${text_0} function.`)
arrawF('Arraw')

function fun_0(a = 1, b = 'November') {
  const sumString = `${b}, ${a}.`
  console.log(sumString)
}
fun_0(29)

let array_0 = [2, 45, 87, 453, 10, 9, 48]
const arr_1 = array_0.filter((item) => {
  return item > 30 && item < 100
})
console.log(arr_1)

//Array and methods
array_0.pop()
console.log(array_0)

array_0.push(661)
console.log(array_0)

array_0.shift()
console.log(array_0)

array_0.unshift(65, 441, 9043)
console.log(array_0)

const arr_2 = array_0.slice(1, 4)
console.log(arr_2)
arr_2.pop()
console.log(arr_2)

//Objects
let infoGaara = {
  name: 'Gaara',
  age: 16,
  status: 'kasekage',
}
console.log(infoGaara)

//Promises
const newProm = new Promise((res, rej) => {
  let arrProm = [1, 45, 64, 22, 908, 4512]
  const obProm = {
    port: 3000,
    status: 'Error: 404',
    server: 'alcatel-soua',
  }
  setTimeout(() => {
    arrProm.pop()
    arrProm.unshift(80, 13, 27)
    console.log(arrProm)
  }, 2000)
  res(arrProm)
})
newProm
  .then((arrThen_1) => {
    setTimeout(() => {
      console.log(arrThen_1[4])
    }, 3000)
  })
  .then(() => {
    setTimeout(() => {
      let a = 4 * 13
      console.log(a)
    }, 4000)
  })
  .catch((err) => console.error(err))
