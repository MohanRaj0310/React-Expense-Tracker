/*******************************...with an array********/

// const array1 = ['iewie',389398832, '2438924']

// const newArray = [...array1, 1, 2, true]
// const temp = [...array1]

// console.log(newArray)
// console.log(temp)

// //************************************** */ with an oject

// const obj = {
//   name: 'mohan',
//   age: 90,
//   year: 9009
// }

// const newObj = {...obj, gender: 'male', isTired: false}
// const obj1 = {...obj}

// console.log(newObj)
// console.log(obj1)

// //presedence

// const obj2 = {...obj, name: 'rajkumar'}
// console.log(obj2)

// const obj4 = {
//   name: 'kwkw',
//   age: 0909,
//   enteredTitle: ''
// }

// let obj5 = {
//   ...obj4,
//   city: 'bangalore',
//   age: '',
//   enteredTitle : '',
// }
// console.log(obj5)//{name: 'kwkw', age: 909, city: 'bangalore'}

// obj5 = {...obj5, address: "ss-puram"}
// console.log(obj5)

///rest OPERATOR

const filter1 = (...val) => {
  return val.filter(e => !(e % 3))
}

console.log(filter1(90, 89, 100, 112, 120, 300, 400))// (3) [90, 120, 300]

// const _filter = (...arg) => {
//   return arg.filter(e => e === '_')
// }

// console.log(_filter('_dlijeiwd_dojwid_dwjed'))

// const array = [{
//   title: 'diejd',
//   num: 90,
// }]

// const newArray = [{
//   title: 'fir',
//   num: 0909
// }, ...array]
// console.log(newArray)
// console.log(newArray[1])

const expenses = [
  {
    id: 1,
    num: 09
  },
  {
    id: 2,
    num: 78
  }
]

const NewExpenses = [{
  id: 3,
  num: 89
}, ...expenses]

const newMap = NewExpenses.map(key => {
  return key.id
})

console.log(newMap)
console.log(expenses)