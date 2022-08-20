const p2 = document.querySelector(".p2");

function ubahWarna() {
  p2.style.backgroundColor = "lightblue";
}
// p2.onclick = ubahWarna;

const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");

  const liBaru = document.createElement("li");
  const liTextBaru = document.createTextNode("Li Baru");

  liBaru.appendChild(liTextBaru);

  ul.appendChild(liBaru);
});
