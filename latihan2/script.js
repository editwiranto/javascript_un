function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);

    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    for (i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang.length == 0) {
        console.log("Tidak ada penumpang");

        return penumpang;
      } else if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;

        return penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Edit Wiranto", ["Medan", "Kualanamu"], [], 0);
