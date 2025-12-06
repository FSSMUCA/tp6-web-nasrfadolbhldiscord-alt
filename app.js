const historique = [];

const form = document.getElementById("calc-form");
const inputA = document.getElementById("nombreA");
const inputB = document.getElementById("nombreB");
const selectOp = document.getElementById("operation");
const errorBox = document.getElementById("error-box");
const resultContent = document.getElementById("result-content");
const historyList = document.getElementById("history-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const valeurA = inputA.value;
  const valeurB = inputB.value;
  const operation = selectOp.value;

  afficherErreur("");

  if (valeurA === "" || valeurB === "") {
    afficherErreur("Les deux nombres doivent être remplis.");
    return;
  }

  const nombreA = Number(valeurA);
  const nombreB = Number(valeurB);

  if (isNaN(nombreA) || isNaN(nombreB)) {
    afficherErreur("Les valeurs saisies doivent être des nombres.");
    return;
  }

  if (operation === "") {
    afficherErreur("Veuillez choisir une opération.");
    return;
  }

  if (operation === "/" && nombreB === 0) {
    afficherErreur("Division par zéro interdite.");
    return;
  }

  let resultat;

  if (operation === "+") {
    resultat = nombreA + nombreB;
  } else if (operation === "-") {
    resultat = nombreA - nombreB;
  } else if (operation === "*") {
    resultat = nombreA * nombreB;
  } else if (operation === "/") {
    resultat = nombreA / nombreB;
  }

  resultContent.textContent = resultat;

  const operationTexte = `${nombreA} ${operation} ${nombreB} = ${resultat}`;
  const now = new Date().toLocaleTimeString();

  historique.push({
    texte: operationTexte,
    heure: now
  });

  rafraichirHistorique();
});

function afficherErreur(message) {
  if (message === "") {
    errorBox.style.display = "none";
    errorBox.textContent = "";
  } else {
    errorBox.style.display = "block";
    errorBox.textContent = message;
  }
}

function rafraichirHistorique() {
  historyList.innerHTML = "";

  historique.forEach(function (item) {
    const li = document.createElement("li");

    const spanTexte = document.createElement("span");
    spanTexte.textContent = item.texte;

    const spanHeure = document.createElement("span");
    spanHeure.textContent = item.heure;
    spanHeure.classList.add("time");

    li.appendChild(spanTexte);
    li.appendChild(spanHeure);

    historyList.appendChild(li);
  });
}
