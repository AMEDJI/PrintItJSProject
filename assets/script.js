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

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const dots = document.querySelectorAll(".dot")
const imgElement = document.querySelector(".banner-img")
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const tagLineElement = document.querySelector("p")

let currentIndex = 0;
// let i = 0;

// right.addEventListener('click',() => {
// 	console.log(i);
// });

// left.addEventListener('click',() => {
// 		console.log(i);		
// });


slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("dot_selected"); 
    dot.addEventListener("click", () => goToSlide(index)); 
    dotsContainer.appendChild(dot);
});

function goToSlide(index) {
    currentIndex = index;
    imgElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`; 
    tagLineElement.innerHTML = slides[currentIndex].tagLine;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[currentIndex].classList.add("dot_selected");
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 3000);

goToSlide(0);