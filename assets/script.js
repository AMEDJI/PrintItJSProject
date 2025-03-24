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

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('.carroussel-content');
const nbImages = slider.childElementCount;

let i = 0;

right.addEventListener('click',() => {
	if(i < nbImages - 4)
		i++;
	else
			i = 0;
	
	console.log(i);
	slider.style.transform = 'tranlateY(-' + (i* 470) + 'px)';
});

left.addEventListener('click',() => {
	if(i > 0)
		i--;
	else
		i =nbImages - 4;
		console.log(i);
		slider.style.transform = 'tranlateY(-' + (i* 470) + 'px)';
});