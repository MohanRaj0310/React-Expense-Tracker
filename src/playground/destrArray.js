// console.log('array destrcture')

// const array = [90, 89, 78, 76, 90]
// const alphaNumeric = [90, 'u4838483', '47239csdjs', true]

// const [a, b, c, ...rest] = array
// console.log(a, b, c)
// console.log(rest)

// const [num1, ...remains] = alphaNumeric
// console.log(num1)
// console.log(typeof remains)
// console.log(remains[0])
// console.log(remains[remains.length - 1])

// const combineValues = [90, 'owojjfw', {
//   title: 'mohan',
//   year : 9090
// }, true, undefined]

// const [...rest] = combineValues
// console.log(rest, typeof rest)//object
// console.log(rest[2].title)//mohan

// //combine multiple arrays with an single array

// const array1 = [90, 'diehdie', 82340, true, false, undefined, NaN, null]
// const array2 = ['mohan', 1999, false, false, false]

// const newArray = [array1, array2]
// console.log(newArray, typeof newArray)//object
// console.log(newArray.length)//2
// console.log(newArray[10])//undefined
// console.log(newArray.array1)//undefined

// const [val1, val2, ...spreadArr] = newArray
// console.log(spreadArr)// []
// console.log(val1)//[90, 'diehdie', 82340, true, false, undefined, NaN, null]
// console.log(val2)// ['mohan', 1999, false, false, false]
// console.log(val1[3])//true
// const [val3, ...rest1] = newArray
// console.log(rest1[3])//udnefined*********************
// console.log(rest1)
// /******************************another way of defining the multiple array*/
// const a = ['diowjod', 88889, 'dedw', 78378782, true]
// const b = ['doepd', 89329, undefined]
// const x = [...a, ...b]
// console.log(x.length, typeof x, x[6])
// /***********************the old way of cobining multiple an array */

// const oldWayOfCombine = a.concat(b)
// console.log(oldWayOfCombine, typeof oldWayOfCombine)//object// working so well

// const user = [09, 7624, 'diwye', true]

// const [newOne, ...rest2] = user
// console.log(user)
// console.log(rest2[1])//diwye

// /*******************************workin with function of array destructuring */

// const operations = (a, b) => [a + b, a * b];

// const [sum , multiply] = operations(10, 90)

// console.log(sum, typeof sum)
// console.log(multiply, typeof multiply)

/****************************working with object*************/

// const p1 = {
//   name: 'abc',
//   year: 1999,
//   age: 23,
//   address : {
//     city: 'bangalore',
//     code : 625513
//   },
// }

// const p2 = {
//   name: 'xyz',
//   year: 2000,
//   age: 22,
//   address : {
//     city: 'mysore',
//     code : 625514
//   },
// }

// const overRideInfo = {...p1, ...p2}
// console.log(overRideInfo)

// const {name, gender = "unknown",...rest} = p2
// console.log(rest)
// console.log(gender)

// //functions

// const func = (obj) => console.log(obj)
// func(p1)

// const func1 = ({name, gender = {
//   title: 'mohan',
//   age: 3489348934234089
// }}) => console.log(name, gender)//abc
// func1(p1)

// other way of defining

// const useState1 = (arg) => {
//   return [1, 0, arg.title]
// }

// const [userInput, setInput, ...rest] = useState1({
//   title: '',
//   amount: '',
//   date: ''
// })

// console.log(userInput)
// console.log(rest)

// const stateFunc = () => [0, 1, true, '', {
//   methods : function (arg){
//     console.log('from object method')
//     return arg + 100
//   }
// }]

// const [x, y, z, s, d] = stateFunc()
// console.log(d)

// console.log(d.methods(100))//200

// // wroking with state concept

// const obj = {
//   key1 : 'mohan',
//   key2: 'viki'
// }

// function state (val){
//   obj.key1 = val
// }

// state('rajuuuuu')

// console.log(obj.key1)//rajuu
// state({

// })

// assignment

function squirrelsPlay(temp, isSummer) {
  if (isSummer === true){
    if (temp >= 60 && temp <= 90) {
      console.log(true)
    } else if (temp > 90 && temp <= 100){
      console.log(true)
    }
  } 
  else if (isSummer === false){
    if (temp >= 60 && temp <= 90){
      console.log(true)
    } else if (temp > 90 && temp <= 100){
      console.log(false)
    }
  }
}

squirrelsPlay(70, false)//true
squirrelsPlay(95, false)//false
squirrelsPlay(95, true)//true

var x = 90;

//(x === 90 && console.log(true)) === undefined || console.log(false)
































  








