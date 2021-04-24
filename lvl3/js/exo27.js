//Code à faire ici
console.log(alea());
function alea(){
    var nb = Math.floor(Math.random()*11);//entre 0 et 10 (*11 car floor prend l'entier inférieur)
    console.log(nb);
    if(nb>=4){//si =4 ou superieur
        if(nb<=6){//si =6 ou inferieur
            return true;
        }
    }
    return false;

}