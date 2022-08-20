const btn = document.getElementById("btn");

btn.onclick = function () {
  //   document.body.setAttribute("class", "biru-muda");

  document.body.classList.toggle("biru-muda");
};

const acakWarna = document.createElement("button");
const acakWarnaText = document.createTextNode("Acak Warna");
acakWarna.setAttribute("type", "button");
acakWarna.appendChild(acakWarnaText);
btn.after(acakWarna);

acakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sHijau.addEventListener("input", function () {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("input", function () {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function () {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
