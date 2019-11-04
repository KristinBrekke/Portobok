// JavaScript Document

// Credit: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9 (03-04/11/19) 

var slideIndex = 1;

var myTimer;

var slideshowContainer;

function plusSlides(n){		//
  clearInterval(myTimer);	//The clearInterval() method clears a timer set with the setInterval() method
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);		//setInterval("javascript function", milliseconds); calls a function at specified intervals, here each 4000 millisecond.This will continue until clearInterval() is called or the window is closed  
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");	
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}