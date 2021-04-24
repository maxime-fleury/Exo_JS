//Code à faire ici
var t1 = "012345678912345";//15 char
var t2 = "01234567891234";//14 char
var t3 = "0123456789123456"//16 char
console.log(greaterThan15(t1));
console.log(greaterThan15(t2));
console.log(greaterThan15(t3));
function greaterThan15(x){
    if(x.length > 15){
        return true;
    }
    else{
        return false;
    }

}