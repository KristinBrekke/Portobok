// JavaScript Document

var bilderObjects = [ 
{
  url: "../images/dina_kaffekanne_1_landscape.jpg",
  href: "project_dina1.html",
  alt: "dina_kaffekanne", 
  text: "Dina: Kaffekanne"
},	
{
  url: "../images/dina_terminal_1_landscape.jpg",
  href:"project_dina2.html",
  alt:"dina_terminal",
  text:"Dina: Kundestyrt Bankterminal"
},
{
  url: "../images/jennymarie_høyttaler_1_landskap.png",
  href:"project_jennymarie1.html",
  alt:"jm_høyttaler",
  text:"Jenny Marie: Høyttaler"
},
{
  url: "../images/jennymarie_kaffekanne_1_landskap.png",
  href:"project_jennymarie2.html", 
  alt:"jm_kaffekanne", 
  text:"Jenny Marie: Kaffekanne", 
},
{
  url: "../images/kristin_høyttaler_1_landscape.jpg",
  href:"project_kristin1.html", 
  alt:"kristin_høyttaler", 
  text: "Kristin: Høyttaler"
},
{
  url: "../images/kristin_kaffekanne_1_landscape.jpg",
  href:"project_kristin2.html", 
  alt:"kristin_kaffekanne", 
  text: "Kristin: Kaffekanne"
},
{
  url: "../images/oskar_termokanne_1_landscape.jpeg",
  href:"project_oskar1.html", 
  alt:"oskar_termokanne", 
  text:"Oskar: Termokanne"
},
{
  url: "../images/oskar_ukulele_1_landscape.JPG",
  href:"project_oskar2.html", 
  alt:"oskar_ukulele", 
  text:"Oskar: Ukulele"
},
{
  url: "../images/kaffekanne_1_landskape.JPG",
  href:"project_solveig1.html",
  alt:"solveig_kaffekanne",
  text:"Solveig: Kaffekanne"
},
{
  url: "../images/solveig_mauren_2_landscape-kopi.png",
  href:"project_solveig2.html",
  alt:"solveig_lampe", 
  text:"Solveig: Lampe", 
}
];

var dotContainer = document.getElementById("dots");
var slideshowContainer = document.getElementById("slideshow-container");

var dotsHTML = "";
var imgsHTML = "";
for (var i = 0; i < bilderObjects.length; i++) {
	var imgHTML = 	'<div class="mySlides"><a href="' + bilderObjects[i].href + '"><img src="' + bilderObjects[i].url + '"> <alt="' + bilderObjects[i].alt + '"/></a><div class="text">' + bilderObjects[i].text + '</div></div>';
	imgsHTML += imgHTML;
	
	var dotHTML = '<span class="dot" onclick="currentSlide(' + (i+1) +  ')"></span>';
	dotsHTML += dotHTML;
	
	
}
dotContainer.innerHTML = dotsHTML;
slideshowContainer.innerHTML = imgsHTML;


// Inspiration credit: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9 (03-04/11/19) 

var slideIndex = 1;

var myTimer;

var slideshowContainer;

function plusSlides(n){		//this function initializes the slideshow as well as decide whether to go forward or backward within the sequence
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

function showSlides(n){		//the function gathers the slide elements and the dots elements 
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