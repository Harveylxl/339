'use strict';
console.log("JavaScript is running.");
var navItems = document.querySelector("#nav-items");
console.log(navItems);
var navToggle = document.querySelector("#nav-toggle");


console.log(navToggle.classList);

window.addEventListener("resize", () => {
    var width = window.innerWidth;
    console.log("window resized" + width);
    if (width < 600) {
        navItems.classList.add("hidden");
        navToggle.classList.remove("hidden");
    }

    else {
        navItems.classList.remove("hidden");
        navToggle.classList.add("hidden");
    }

});

navToggle.addEventListener("click",
	function() {
		if ( navItems.classList.contains("hidden") ) {


			navItems.classList.remove("hidden");
			navItems.setAttribute("aria-hidden", "false");
			navToggle.setAttribute("aria-expanded", "true");


		}
		else {

			navItems.classList.add("hidden");
			navItems.setAttribute("aria-hidden", "true");
			navToggle.setAttribute("aria-expanded", "false");
		}
	}
);


//home page//
window.addEventListener('load',function(){
	var welcome = document.querySelector('.greet'),
		subtext = document.querySelector('.subTexts'),
		follow  = document.querySelector('.followUs'),
		follow2  = document.querySelector('.followUs2'),
		follow3  = document.querySelector('.followUs3'),
		delay = 1500; 
	
	
	setTimeout(function(){welcome.style.right='0';},delay*3.5);
	setTimeout(function(){subtext.style.bottom = '0%';},delay*4);
	setTimeout(function(){subtext.style.bottom = '-100%';},delay*5.2);
	setTimeout(function(){follow.style.right='0%';},delay*6.4);
	setTimeout(function(){follow2.style.bottom='0%';},delay*6);
	setTimeout(function(){follow3.style.top='0%';},delay*6.2);
	 
  });




  document.addEventListener("DOMContentLoaded", function() {
	const fullscreenContainer = document.querySelector(".fullscreen-container");
	const clickableImages = document.querySelectorAll(".clickable-image");

	clickableImages.forEach(image => {
	  image.addEventListener("click", function() {
		fullscreenContainer.innerHTML = `<img src="${image.src}" alt="Full Screen Image" class="fullscreen-image">`;
		fullscreenContainer.style.display = "flex";
	  });
	});

	fullscreenContainer.addEventListener("click", function() {
	  fullscreenContainer.style.display = "none";
	  fullscreenContainer.innerHTML = "";
	});
  });
	

  
  