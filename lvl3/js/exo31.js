//Code à faire ici
getTabx(5);
//permet de vérifier que c'est bien entre 0 et 800
function checkMaxMin(){
    max = 0;
    for(i = 0; i < 100; i++){
         a = getNumberCustom(800,50);
         if(a>max) max = a;
         console.log(a + " Max : " + max);
    }

}
//fonction obtenir un tableau de x element
function getTabx(x){
    max = 800;
    multi = 50;
    //creer un tableau de x element rempli de 0
    var numbers = [];
    for(i = 0; i < x; i++){
        numbers.push(0); 
    }

    for(i = 0; i < x; i++){
       numbers[i] = untilOk(i,numbers,max,multi)
        
    }
    console.log(numbers)
}
function untilOk(i,numbers,max,multi){
    a = getNumberCustom(max,multi);
    var InTab = numberAlreadyInTab(i,numbers,a);
    while(InTab){
        a = getNumberCustom(max,multi);
        InTab = numberAlreadyInTab(i,numbers,a);
    }
    return a;
}
//nombre déjà dans le tableau ou entre 350 & 450
function numberAlreadyInTab(i,numbers,a){
    alreadyExists = false;
    for(y = 0; y <= i; y++){
        if(a == numbers[y])
           alreadyExists = true;
        if(a < 450)
           alreadyExists = true;
        if(a > 350)
           alreadyExists = false;
    }
    return alreadyExists;
}
//obtenir un element
function getTab(){
    a = getNumberCustom(800,50);
    
}

//fonction obtenir un nombre aléatoire de 0 à "to" et multiple de "multiple"
function getNumberCustom(to, multiple){
    return (Math.floor(Math.random()*((to+multiple)/multiple)))*multiple;
}