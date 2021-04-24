//Code à faire ici
/* PARTIE 1
var id = document.getElementsByClassName("para");
for(i = 0; i < id.length;i++)
    console.log(id[i].innerHTML);
*/
/* PARTIE 2
var id = document.getElementsByTagName("span");
for(i = 0; i < id.length;i++){
    console.log(id[i].innerHTML);
}
*/
/* PARTIE 3
var id = document.getElementsByClassName("truc");
console.log(id[0].innerHTML);
*/
// PARTIE 4
var id = document.querySelectorAll('p.all');
for(i = 0; i < id.length;i++){
    console.log(id[i].innerHTML);
}