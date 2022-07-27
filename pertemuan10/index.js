// var angka = parseInt(prompt("Masukkan Angka: "));

// if (angka === 1) {
//   alert("Anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("Anda memasukkan angka 2");
// } else {
//   alert("Anda salah memasukkan nilai");
// }

var item = prompt("Pilih Minuman / Makanan: \n Nasi,Mandi,Apel,Pisang");
switch (item) {
  case "nasi":
    alert("nasi adalah makanan sehat");
    break;
  case "mandi":
    alert("mandi adalah minuman sehat");
    break;
  case "apel":
    alert("apel adalah makanan Tidak sehat");
    break;
  case "pisang":
    alert("pisang adalah makanan Tidak sehat");
    break;
  default:
    alert("Anda salah memasukkan");
}
