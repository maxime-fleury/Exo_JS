let number = 15;
let text = "Je suis un texte";
let bool = false;

//Code à faire ici, on attend plus que typeof !
var toType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
  console.log(toType(number));
  console.log(toType(text));
  console.log(toType(bool));