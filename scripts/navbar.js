// JavaScript Document

document.getElementById("navbar-placeholder").innerHTML = 
    `<div id="navigasjonsbar">
			
        <label for= "box" onClick="hamburger()">&#9776</label>
			<input type = "checkbox" id ="box"/>
			<a href="../html/homepage.html" class="logo-portoboklink"> <img src="../images/logo_pb_tykkere.png" alt="logo Portobok" id="logo_portobok" ></a>
			<ul id="navbar">
			
           		<li><a href="../html/designers.html" id="designerknapp">Designere</a></li>
            	<li><a href="../html/projects.html" id="prosjekterknapp">Prosjekter</a></li>
            	<li><a href="../html/contact.html" id="kontaktknapp">Kontakt</a></li>
       	 </ul>
    </div>

    `;

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
	if (y.matches) { //dette skal være om skjermen er mindre enn 940px
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
		navbar.style.color= "red";
		x.checked = false;
	}

}

function firkant(){
 	var navbar = document.getElementsByTagName("li");
	
	const designere = navbar[0];
	const prosjekter = navbar[1];
	const kontakt = navbar[2];
	console.log(prosjekter);
	var location = window.location.href;
	console.log(location);
	if (location == document.getElementById("designerknapp")) {
		designere.style.textDecoration= "underline";
		designere.style.textUnderlineColor= "red";
		console.log("jippi");
	}
												
	else if (location == document.getElementById("prosjekterknapp")) {
		console.log("hei");
		prosjekter.style.textDecoration= "underline";
		prosjekter.style.textUnderlineColor= "red";
	}
	
	else  {
		kontakt.style.textDecoration= "underline";
		kontakt.style.textUnderlineColor= "red";
	}
	
	
}
		

		
	
	
	
	


