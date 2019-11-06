// JavaScript Document

document.getElementById("navbar-placeholder").innerHTML = 
    `<div id="navigasjonsbar">
			
        <label for= "box" onClick="hamburger()">&#9776</label>
			<input type = "checkbox" id ="box"/>
			<a href="../html/homepage.html"> <img src="../images/logo_pb.png" alt="logo Portobok" id="logo_portobok"></a>
			<ul id="navbar">
			
           		<li><a href="../html/designers.html">DESIGNERE</a></li>
            	<li><a href="../html/projects.html">PROSJEKTER</a></li>
            	<li><a href="../html/contact.html">KONTAKT</a></li>
       	 </ul>
    </div>
	

    `
/*
function hamburger(){
	
	var x = document.getElementById("box");
	
	var navbar = document.getElementsByClassName("navbar");
	
	console.log("hello world");
	
	for (var i =1; navbar.length; i++){

		if (x.checked == true) {
			navbar[i].style.display = "block";
		}	
	}
}

*/

//hva vil jeg: når hamburgermenyen vises ønsker jeg at listen skal legge seg under isteden for sidelengs
	
function hamburger() {
	var x = document.getElementById("box");
	var navbar = document.getElementById("navbar");
	
	
					
	if (x.checked == false){
		console.log("if");
		navbar.style.display = "block"; //skulle gjør at listeelementene legger seg på rad nedover
		navbar.style.float = "none" //flyter ikke lenger til venstre

	}

	else {
		navbar.style.display = "none"; //gjør at listeleementene ikke vises
		console.log("else") 
	}
}
		
function resize() {
	console.log("resized");
	var x = document.getElementById("box");
	var y = window.matchMedia("(max-width: 940px)");
	if (y.matches == true) { //dette skal være om skjermen er mindre enn 940px
		navbar.style.display = "none"
		if(x.checked) {
		navbar.style.display = "block"
		navbar.style.float="none"
		}
	}
	else { //når skjermen er større enn 940px
		console.log("kom igjen");
		navbar.style.display = "inline"; 
		navbar.style.float = "right"; //flyter til venstre
		x.checked = false;
	}

}
		

		
	
	
	
	


