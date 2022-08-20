// function rekursif(n) {
//   if (n === 0) return; //base case

//   console.log(n);
//   rekursif(n - 1);
// }

// rekursif(5);

// function rekursif(n) {
//   if (n === 0) return 1;

//   return n * rekursif(n - 1);
// }

//function declaration

function halo(nama) {
  console.log("Halo" + nama);
}

halo("Edit");

//function expression

var halojuga = function (nama) {
  console.log("Halo Juga" + nama);
};
console.log("Edit juga");
