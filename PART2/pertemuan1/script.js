//document.getElementById('');

const judul = document.getElementById("judul");

judul.style.color = "white";
judul.style.backgroundColor = "Grey";
judul.style.borderRadius = "20px";

//dpcument.getElementsByTagName

const p = document.getElementsByTagName("p");

for (i = 0; i < p.length - 1; i++) {
  p[i].style.backgroundColor = "Lightblue";
}

//document.getElementsByClassName

const p1 = document.getElementsByClassName("p");

p[0].style.color = "green";
p[1].style.color = "green";
p[2].style.color = "green";
p[3].style.color = "blue";

const select = document.querySelector("section#b ul");

select.style.color = "green";

//document.querySelectorAll

const sAll = document.querySelectorAll("#b ul li");

sAll[0].style.backgroundColor = "blue";

const section = document.getElementById("b");
const p10 = section.querySelector("p");
p10.style.backgroundColor = "red";
