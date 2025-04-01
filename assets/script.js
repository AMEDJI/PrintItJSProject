const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let imgElement = document.querySelector(".banner-img")
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
let tagLineElement = document.querySelector("p")

let currentIndex = 0;

// Crée un élément <span>
for (let index = 0; index < slides.length; index++) {
    let dot = document.createElement("span");
    dot.className = "dot"; 
	// Ajoute la classe "dot"
    if (index === 0) { 
        dot.classList.add("dot_selected"); 
	// Ajoute la classe "dot_selected" au premier point
    }
    
    dot.addEventListener("click", function() {
        goToSlide(index); 
	// Va au slide correspondant quand on clique
    });
    
    dotsContainer.appendChild(dot); 
	// Ajoute le point dans le conteneur
}
function goToSlide(index) {
	let dots = document.querySelectorAll(".dot");
	imgElement.src = `./assets/images/slideshow/${slides[index].image}`; 
    tagLineElement.innerHTML = slides[index].tagLine;
	for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }
    dots[index].classList.add("dot_selected");
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
});

goToSlide(0);