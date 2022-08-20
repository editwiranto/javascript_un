var pilih = alert("Tebak angka 1 - 10 \n3 x Kesempatan");
var chance = 3;
var random = Math.floor(Math.random() * 11);
while (chance >= 1) {
  var tebak = prompt("Silahkan tebak dari 1 - 10");

  if (tebak == random) {
    alert("Tebakkan mu Benar");
    break;
  } else if (tebak > random) {
    alert("Teralu tinggi");
    chance -= 1;
  } else if (tebak < random) {
    alert("Terlalu rendah");
    chance -= 1;
  }

  if (chance == 0) {
    alert("Kesempatan mu habis");
    break;
  }
}
