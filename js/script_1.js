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
