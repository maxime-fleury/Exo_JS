let joursSemaine = ["jourImaginaire", "lundi", "mardi", "mercredi", "juedi", "vendredi", "samedi", "dimanche"];

//Code à faire ici
//supprime les elements de 0 à 1 donc seulement le premier element
joursSemaine.splice(0,1);
//joursSemaine.shift();    SOLUTION ALTERNATIVE supprime premier element

//modifier jeudi
for(i = 0; i < joursSemaine.length; i++){
    if(joursSemaine[i] == "juedi")
        joursSemaine[i] = "jeudi";
}

//affichage
joursSemaine.forEach( e => console.log(e) );