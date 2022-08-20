var penumpang = ["Galih", undefined, "Sunan"];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  //cek penumpang klo kosong
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // cek terakhir dari penumpang
    for (i = 0; i < penumpang.length; i++) {
      // cek jika ada tempat duduk yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;

        return penumpang;
      }
      //cek penumpang yang namanya sama
      else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + "Penumpang sudah ada");
        return penumpang;
      }
      //isi tempat duduk terakhir
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Tidak ada Penumpang");

    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak Ada");
      }
    }
  }
};
