
// DOM = Document Object Model
// balise = met le nom de la balise
// id = je met #
// class = je met .

var title = document.querySelector(".title");
var modal = document.querySelector("#modal");

// title.style.color = "red"; // à partir du 3ème points nous ajoutons les modifications sur notre page


title.addEventListener("click", function(){

    title.style.animation = "1s couleur linear infinite";
    modal.style.display = "flex";
});
