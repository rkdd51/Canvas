let slides = [
		'images/slide-1.jpg',
		'images/slide-2.jpg',
		'images/slide-3.jpg'
]
let currentImage = 0;
let sliderImage = document.querySelector('.slider__image');
let prevBtn = document.querySelector('.slider__button-prev');
let nextBtn = document.querySelector('.slider__button-next');
let autoplayBtn = document.querySelector('.slider__button-play');

function nextImage() {
	if(currentImage < slides.length - 1) {
		currentImage++;
	} else {
		currentImage = 0;
	}
	sliderImage.src = slides[currentImage];
}

function prevImage() {
	if (currentImage > 0) {
		currentImage--;
	} else {
		currentImage = slides.length - 1;
	}
	sliderImage.src = slides[currentImage];
}

let interval;
function autoplay() {
	if(interval) {
		clearInterval(interval);
		interval = null;
	} else {
		interval = setInterval(() => {
			nextImage();
		}, 2000);	
	}
	autoplayBtn.children[0].classList.toggle("fa-play");
    autoplayBtn.children[0].classList.toggle("fa-pause");	

}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
autoplayBtn.addEventListener('click', autoplay);