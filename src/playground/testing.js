

// // const newDate = new Date(2021, 05, 10)

// // console.log(newDate, typeof newDate)
// // console.log(Date, typeof Date)


// // var a = 90,
// //     b = 78,
// //     c = 67,
// //     d = 56;
// // console.log(a, b, c, d)
// // let v = 90,
// //     e = 78,
// //     w = 67,
// //     f = 56;
// // console.log(v, e, w, f)
// // console.log(v)

// // console.log(console.log('dejidueu'))

// console.log(Date())//Fri Oct 08 2021 19:03:47 GMT+0530 (India Standard Time)
// console.log(new Date())//2021-10-08T13:34:03.896Z
// console.log(Date)//ƒ Date() { [native code] } (vs)--> [Function: Date]
// // const date = new Date(2021, 8, 10)
// // console.log(date)//2021-09-09T18:30:00.000Z
// let date1 = Date(2021, 9, 10)//Fri Oct 08 2021 19:06:41 GMT+0530 (India Standard Time)// without new keyword, can't make as desired date
// console.log(date1)


// function func (x, y, z){
//   console.log(arguments)
//   console.log(arguments[0])//123
// }
// func(123, 456, 4789379)

// const user = [
//   {
//     name: 'rajkumar',
//     age: 21
//   },
//   {
//     name: 'viki',
//     age: 22,
//   },
//   {
//     name: 'dieeeeeeeeeeeee',
//     age: 90
//   }
// ]
// const getUserInfo = user => console.log(`name of the user is ${user.name} with age of ${user.age}`)

// user.forEach(user => {
//   getUserInfo(user)
// })

// const date = new Date(2021, 9, 10)

// const readableDay = date.toLocaleString('en-gb', {day:'2-digit'})
// const month = date. toLocaleDateString('en-gb', {month: 'long'})
// const year = date.getFullYear()

// console.log(readableDay, month, year)

// const expenses = [
//   {
//     id: 1,
//     title: 'shopping things',
//     amount: 2000,
//     date: new Date(2021, 7, 15)
//   },
//   {
//     id: 2,
//     title: 'buy wisky',
//     amount: 750,
//     date: new Date(2021, 5, 16)
//   },
//   {
//     id: 3,
//     title: 'HomeLoan',
//     amount: 30000,
//     date: new Date(2021, 10, 17)
//   },
//   {
//     id: 4,
//     title: 'Grocery Item',
//     amount: 50000,
//     date: new Date(2021, 11, 18)
//   }
// ]

// console.log(expenses[3])

const array = [
  {
    id: 0,
    num : 90
  },
  {
    id: 1,
    num : 78
  }
]

const getReceive = (val) => {
  let ret = val()
  console.log(ret)//get anonymous array
}

getReceive((x) => {
  return [...array, {
    id: 1,
    num: 100
  }]
})





































