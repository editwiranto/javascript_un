const judul = document.getElementById("judul");

judul.innerHTML = "Edit wiranto"; //innerHTML properti
judul.style.color = "Green"; //style properti
judul.style.fontSize = "20px";

const h1 = document.getElementsByTagName("h1")[0];

h1.setAttribute("class", "dua"); //menambah keals

const section = document.querySelector("section#a .p1");
section.classList.add("Edit", "Wiranto");
section.classList.toggle("Edit"); //kalo ada nama bakal dihapus kalo gk ada bakal ditambah

section.classList.item(1); //meanmpilkan class ke berapa
section.classList.contains("Wiranto"); //cek ada kelasnya tidak
section.classList.replace("Wiranto", "Wirwir");
// section.classList.remove("Edit", "Wiranto");
