
// DOM = Document Object Model
// balise = met le nom de la balise
// id = je met #
// class = je met .

var click = document.querySelector(".clickme");
var bar = document.querySelector(".block2");

// title.style.color = "red"; // à partir du 3ème points nous ajoutons les modifications sur notre page


/*title.addEventListener("click", function(){

    title.style.animation = "1s couleur linear infinite";
    modal.style.display = "flex";
// });*/

click.addEventListener("click", function(){
    bar.style.animation = "2s bar linear";
    bar.style.animationFillMode = "forwards";
});