//logo spinner start
var preloader = document.getElementById("loader");


window.addEventListener("load", function(){
    this.setTimeout(function(){
        preloader.style.display = "none";}, 2000)
    
});
//logo spinner end



//hamburger menu start

window.addEventListener("load", (event) => {
	const menu_btn = document.querySelector('.hamburger');
	const navmenu = document.querySelector('nav');

	menu_btn.addEventListener("click", function() {
		menu_btn.classList.toggle("is-active");
		navmenu.classList.toggle("is-active");
	})
})

// function myFunction(){
// const menu_btn = document.querySelector('.hamburger');
// const navmenu = document.querySelector('nav');
//     if (navmenu.style.left = "100%"){
// 		navmenu.style.left = "0";
// 		menu_btn.classList.toggle('is-active');
// 		navmenu.classList.toggle('is-active');
// } else if (navmenu.style.left = "0"){
// 	navmenu.style.left = "100%";
// }
// }
//hamburger menu end


//services slider

var slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
	var i;

	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("image-sliderfade");

	// get the array of divs' with classname dot
	var dots = document.getElementsByClassName("dot");

	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 2 seconds
	setTimeout(showSlides, 5000);
}

//services slider end