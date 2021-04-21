const myBtn = document.getElementById("myBtn");
const cntClic = document.getElementById("cntClic");
var text = cntClic.innerHTML + " ";

var nbClic = 0;
//solution 1
/*	
myBtn.onclick = function() { 
	nbClic++; 
	cntClic.innerHTML = text+nbClic+"";
};
*/
//solution 2
myBtn.addEventListener("click", () => {
  nbClic++; 
  cntClic.innerHTML = text+nbClic+"";
}, false);

//solution 3
/*

myBtn.addEventListener("click", increment);
function increment(){
	nbClic++;
	ctnClick.innerHTML = text+nbClic+"";
}

*/