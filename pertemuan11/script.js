// var b = "";
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < i; j++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);
// *
// **
// ***
// ****
// *****
// ----------------------
// var b = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);
// *****
// ****
// ***
// **
// *
// ----------------------------------
// var b = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 10; j > 0; j--) {
//     if (j > i) {
//       b += " ";
//     } else {
//       b += "*";
//     }
//   }
//   b += "\n";
// }
// console.log(b);

// var b = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 1; j < 10; j++) {
//     if (j >= i) {
//       b += "*";
//     } else {
//       b += " ";
//     }
//   }
//   b += "\n";
// }
// console.log(b);

// var n = 5;
// var b = "";

// for (var i = 0; i < n; i++) {
//   for (k = 0; k < n - i; k++) {
//     b += " ";
//   }
//   for (var s = 0; s <= i + (i + 0); s++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

var n = 5;
var b = "";

for (var i = n; i >= 0; i--) {
  for (g = 0; g < n - 1; g++) {}
  for (x = 0; x <= i; x++) {
    b += "*";
  }
  b += "\n";
}
console.log(b);
