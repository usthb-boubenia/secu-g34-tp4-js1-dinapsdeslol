"use strict"; // Slide 51 : Mode strict pour éviter les erreurs de portée


// f1 : tableau étudiants (slide 38: tableaux)
function f1() {
  const etudiants = ["Étudiant 1", "Étudiant 2", "Étudiant 3"];
  
  for (let i = 0; i < etudiants.length; i++) { // Slide 44 : boucle for
    console.log(etudiants[i]);
  }
}

// f2 : objet étudiant (slide 39: objets)
function f2() {
  const etudiant = {
    nom: "John",
    prenom: "Doe",
    age: 30
  };
  
  console.log(etudiant); // consol.log() vu dans le slide 33  d'un objet qui est etudiant
}


// f3 : tableau d’objets étudiants (Slide 40: tableau d’objets)
function f3() {
  const etudiantsObj = [
    { nom: "Nom1", prenom: "Prénom1", age: 21 },
    { nom: "Nom2", prenom: "Prénom2", age: 22 },
    { nom: "Nom3", prenom: "Prénom3", age: 23 }
  ];

  
  // affichage sur une seule ligne par étudiant
  for (let i = 0; i < etudiantsObj.length; i++) { // Slide 44 : boucle for
    const e = etudiantsObj[i];
    console.log(e.nom + "-" + e.prenom + "-" + e.age); // Slide 41 : concaténation
  }
}
