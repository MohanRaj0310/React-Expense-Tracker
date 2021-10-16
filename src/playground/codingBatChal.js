console.log('coding challenge')

/*************************data fashion */

// const dataFashion = (you, yourDate) => {
//   if ((you >= 8 && you <= 10) || (yourDate >= 8 && yourDate <= 10)) {
//     return 2
//   } else if ((you <= 2 || yourDate <= 2)) {
//     return 0
//   }else if (you === yourDate){
//     return 1
//   }
// }

// console.log(dataFashion(5, 10)) //2
// console.log(dataFashion(5, 2)) //0
// console.log(dataFashion(5, 5)) // 1
// //testing
// console.log(dataFashion(100, 2)) // not passing
// console.log(dataFashion(100, 100))//1


/************************* sortasum*/

// const sortasum = (a, b) => {
//   if (a + b >= 10 && a + b <= 19){
//     return 20
//   } else {
//     return a + b
//   }
// }
// console.log(sortasum(10, 11))// 21
// console.log(sortasum(9, 4))// 20

// const a = 10
// const b = 2
// console.log(a + b > 9 && a + b < 20 ? 20 : a + b)

/*************************************niranjan test */

// const checks = (a, b) => {
//   if (((!(a % 3) && !(a % 5)) && !(b%3) && !(b % 5))){
//       return `${a}, ${b} both are divided by 3, 5 number`, false
//   } else {
//       return true
//   }
// }

// console.log(checks(30, 15))//false
// console.log(checks(34, 15))//true
// console.log(checks(90, 63))//true
// console.log(checks(100, 90))//true

// // other way

// let c = 15

// if (c % 3 == 0 && c % 5 == 0 || c % 3 != 0 && c % 5 != 0 ){
//   console.log(false)
// } else {
//   console.log(true)
// }

//another way

// let d = 90

// if ((d % 3 == 0 || d % 5 == 0) && ((d % 3 == 0 && d % 5 == 0) != 1)){
//   console.log(true)
// } else {
//   console.log(false)
// }

// let d = 99

// if (d % 3 == 0 && d % 5 == 0){
//   console.log(false)
// } else {
//   console.log(true)
// }

let day;

switch (day) {
  case "monday":
    console.log('7.00 am')
    break;
  case "monday":
    console.log('7.00 am')
    break;
  case "wednesday":
    console.log('7.00 am')
    break;
  case "sunday":
    console.log('9.00 am')
    break;
  default :
    console.log('dsdsd')
}








































