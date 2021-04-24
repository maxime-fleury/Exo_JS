//Code à faire ici
var bt = document.querySelector('input[type=submit]');

var input = document.querySelector("input[type=text]");
bt.disabled = true;
console.log(input);
    input.addEventListener("keyup",
        function (){
            console.log(input.value + "tt");
            if(input.value==""){
                bt.disabled = true;
                console.log("vide");
            }
            else{
                bt.disabled = false;
                console.log("pas vide");
            }
        }
    );
    bt.addEventListener("click", function(event){
        event.preventDefault()
});