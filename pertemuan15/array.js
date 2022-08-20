//memanipulasi array

// var arr = [];

// arr[0] = "Edit";
// arr[1] = "Wiramto";
// arr[3] = "Edit 2";

// console.log(arr);

//menghapus array

// var arr = ["edit", "wiranto", "TI - H  19"];

// arr[0] = undefined;
// console.log(arr);

//Menampilkan Array

// var arr = ["Edit", "Wiranto", "TI-H 19", "STMIKTIME"];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//join

// var arr = ["Edit", "Wiranto"];

// console.log(arr.join(" - "));

//oush and pop

//var arr = ["Edit", "Wiranto", "Kimia", "Selamat", "Datang"];

//console.log(arr.pop()); //buang depan
// console.log(arr.push("Edit", "fitri"));

//unshift and shift
// arr.unshift("doddy");
// arr.shift();
//4.splice
//splice(indexawalm,maudihapusberapa,elemenbaru1,elemenbaru2)
// arr.splice(1, 0, "Selamat");

//5.slice

// arr2 = arr.slice();

// console.log(arr2);

//6. Foreach
var arr = [1, 10, 20, 2, 5, 6, 7, 8];
// var mhs = ["robin", "Edit", "Siskae"];

// arr.forEach(function (e) {
//   console.log(e);
// });

// mhs.forEach(function (i, z) {
//   console.log("Mahasiswa Ke - " + (z + 1) + " adalah : " + i);
// });

// 7. sort

// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr.join(" - "));

// 8.filter , bisa banyak nilai

// var arr2 = arr.filter(function (x) {
//   return x > 5;
// });
// console.log(arr2);

// 8.find , hanya bisa satu nilai

var arr3 = arr.find(function (x) {
  return x == 5;
});
console.log(arr3);
