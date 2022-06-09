const divp = document.getElementById("p");
const divf = document.getElementById("f");
const divc = document.getElementById("c");

const t = ["p", "f", "c"];
let pfc = t[Math.floor(Math.random() * (3 - 0)) + 0];
console.log(pfc);

let joueur;

const btn = document.getElementById("btn");
const compteur = document.getElementById("compteur");

btn.addEventListener("click", () => {
    let compt = 0;
  while (compt < 5) {
    compt++;
    compteur.innerText = compt;
  }

  divp.addEventListener("click", () => {
    joueur = t[0];
    if (pfc == joueur) {
        console.log("Nul");
    }
    if (joueur && pfc == t[1]) {
        console.log("Perdu");
    }
    if (joueur && pfc == t[2]) {
        console.log("Gagner");
    }
  });

  divf.addEventListener("click", () => {
    joueur = t[1];
    if (pfc == joueur) {
        console.log("Nul");
    }
    if (joueur && pfc == t[2]) {
        console.log("Perdu");
    }
    if (joueur && pfc == t[0]) {
        console.log("Gagner");
    }
  });

  divc.addEventListener("click", () => {
    joueur = t[2];
    if (pfc == joueur) {
        console.log("Nul");
    }
    if (joueur && pfc == t[0]) {
        console.log("Perdu");
    }
    if (joueur && pfc == t[1]) {
        console.log("Gagner");
    }
  });
});