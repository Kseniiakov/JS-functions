// Ex. 1 ////////////////////////////////////////////

// Num1 = Number (prompt('введите первое число'));
// Num2 = Number (prompt('введите второе число'));

// function maxNum (a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return null;
//   }

//   if (a > b){
//     return a;
//   }

//   if (a < b){
//     return b;
//   }

//   return null;
// }

// let result = maxNum (Num1, Num2);
// alert( result);

// Ex. 2 ////////////////////////////////////////////

// let age = prompt ('Cколько вам лет?');

// function isAdult (a) {

//   if (isNaN(a)) {
//         return null;
//       }

//   if (a >= 18) {
//     return true;
//   }

//   if (a < 18) {
//     return false;
//   }

//   return null;
// }

// let result = isAdult (age);
// alert (result);

// Ex. 3 ////////////////////////////////////////////

// Num1 = Number (prompt('введите первое число'));
// Num2 = Number (prompt('введите второе число'));

// function checkMultiplicity (a, b) {

//   if (isNaN(a) || isNaN(b)) {
//     return null;
//   }
  
//   if (a % b) {
//     return false;
//   }

//   return true;
// }

// let result = checkMultiplicity (Num1, Num2);
// alert( result);

// Ex. 4 ////////////////////////////////////////////

// sideAC = Number (prompt('введите первую сторону треугольника'));
// sideAB = Number (prompt('введите вторую сторону треугольника'));
// sideBC = Number (prompt('введите третью сторону треугольника'));

// function possTriangle (ac, ab, bc) {

//   if (isNaN(ac) || isNaN(ab) || isNaN(bc)) {
//     return null;
//   }

//   if (ac <= ab + bc && ab <= ac + bc && bc <= ac + ab) {
//     return true;
//   }

//   return false;
// }

// let result = possTriangle (sideAC, sideAB, sideBC);
// alert( result);

// Classwork minNum ////////////////////////////////////////////

Num1 = Number (prompt('введите первое число'));
Num2 = Number (prompt('введите второе число'));

function minNum (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return null;
  }

  if (a <= b){
    return a;
  }

  if (a > b){
    return b;
  }

  return null;
}

let result = minNum (Num1, Num2);
alert( result);