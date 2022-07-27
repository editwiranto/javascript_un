lagi = true;

while (lagi) {
  var lagi = true;
  var pilih = prompt("Silahkan pilih : gajah,orang,semut");
  var comp = Math.random();
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.6) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  if (pilih == comp) {
    hasil = "SERI";
  } else if (pilih == "gajah") {
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (pilih == "orang") {
    hasil = comp == "gajah" ? "Kalah" : "Menang";
  } else if (pilih == "semut") {
    hasil = comp == "gajah" ? "Menang" : "Kalah";
  } else {
    hasil = "Anda salah Memilih";
  }
  alert(
    "kamu memilih : " +
      pilih +
      " comp memilih : " +
      comp +
      "\n Maka Hasilnya : " +
      hasil
  );

  lagi = confirm("Gimana ? Lanjut lagi gk brodi ?");
}
alert(lagi);
