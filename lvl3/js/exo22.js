//Code à faire ici
var id = document.getElementById("clickOnMe");
//Etape 1
id.addEventListener("click", 
function(){ 
    console.log("Cliquer sur le paragraphe d'id=\"clickOnMe\"");
});
//Etape 2 Bonus !
id.addEventListener("mouseover", 
function(){ 
    document.body.style.cursor = 'cell';
});