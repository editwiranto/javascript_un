var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Sedang Beroperasi");
  } else {
    console.log("Angkot No. " + noAngkot + " rusak");
  }
}
