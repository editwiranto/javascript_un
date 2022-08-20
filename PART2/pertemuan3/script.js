getP = document.createElement("p");
createText = document.createTextNode("Selamat Datang");

getP.appendChild(createText);

const sectionA = document.getElementById("a");

sectionA.appendChild(getP);

getLi = document.createElement("li");
createLiText = document.createTextNode("Paragraf Baru");

getLi.appendChild(createLiText);

const sectionB = document.querySelector("section#b ul");
const sectionLi = sectionB.querySelector("li:nth-child(2)");

sectionB.insertBefore(getLi, sectionLi);

const link = document.getElementsByClassName("p1")[0];

sectionA.removeChild(link);

const b = document.getElementById("b");
const p = b.querySelector("p");

const h2Baru = document.createElement("h2");
const textH2 = document.createTextNode("H2 Baru");

h2Baru.appendChild(textH2);

b.replaceChild(h2Baru, p);


const a = sectionA.querySelector('a');

const pBaru = document.createElement('p');
const pTextBaru = document.createTextNode('Paragraf Baru');

pBaru.appendChild(pTextBaru);

sectionA.replaceChild(pBaru,a);