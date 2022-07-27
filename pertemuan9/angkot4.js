var angkotBeroperasi = 6;
var totalAngkot = 10;

for (noAngkot = 1; noAngkot <= totalAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + "Sedang Beroperasi");
  } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
    console.log("Angkot No. " + noAngkot + "Sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + "Sedang tidak Beroperasi");
  }
}
