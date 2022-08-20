//object literal

// var mhs = {
//   nama: "Edit Wiranto",
//   Kelas: "TI - H 19",
//   nim: 1944097,
//   alamat: {
//     jalan: "Jl. HT Rizal Nurdin No.362",
//     kota: "Kota Pari",
//     kecamatan: "Pantai cermin",
//   },
//   ips: [2.0, 3.0, 4.0],
// };

// var mhs = { a: 10 };
// mhs.halo = function () {
//   console.log(this);
//   console.log("Halo");
// };
// mhs.halo();
//this mengembalikan object yang bersangkutan

//object declaration

// function objDec(nama, kelas, nim, ips) {
//   var mhs = {};

//   mhs.nama = nama;
//   mhs.kelas = kelas;
//   mhs.nim = nim;
//   mhs.ips = ips;

//   return mhs;
// }
// function halo() {
//   console.log(this);
//   console.log("Halo");
// }

// this.halo();
//this mengembalikan object global;
//object contructor

// function Mahasiswa(nama, kelas, nim, ips) {
//   this.nama = nama;
//   this.kelas = kelas;
//   this.nim = nim;
//   this.ips = ips;
// }

// var mhs2 = new Mahasiswa("Edit", "TI-H", 1944097, 2.0);

function Halo() {
  console.log(this);
  console.log("Halo");
}

var obj1 = new Halo();
var obj2 = new Halo();
//this mengembalikan object yang baru dibuat
