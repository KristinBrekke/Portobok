// JavaScript Document

//document.getElementById("navbar-placeholder").innerHTML = 
    `<html>
<head>
<meta charset="utf-8">
<title>Navbar</title>
<link rel="stylesheet" type="text/css" href="../style.css">
</head>

<body>
    <header>

        <a href="../html/homepage.html" > <img src="../images/logo_pb.png" alt="logo Portobok" id="logo_portobok"></a>

		<div id="navigasjonsbar">
			
        <label for= "box" onClick="hamburger()">&#9776</label>
			<input type = "checkbox" id ="box"/>
			
			<ul class="navbar">
			
           		<li><a href="../html/designers.html">DESIGNERE</a></li>
            	<li><a href="../html/projects.html">PROSJEKTER</a></li>
            	<li><a href="../html/contact.html">KONTAKT</a></li>
       	 </ul>
    </div>
	
    </header>
<!--<script src="navbar.js" type="text/javascript"> </script>-->	
</body>
</html>

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
	
function hamburger(){
	var x = document.getElementById("box");
	var navbar = document.getElementsByClassName("navbar");
	var y = window.matchMedia("(min-width: 940px)");
	
	
	for (var i=0; i < navbar.length; i++){
			
		if (x.checked){
			
			navbar[i].style.display ="block"; //skulle gjør at listeelementene legger seg på rad nedover
			//navbar.style.flexDirection= "column";
			//navbar[i].style.float= "none"; //gjør at listen ikke lenger legger seg bortover
			console.log(navbar[i]);
			if (y.matches){ //dette skal være om skjermen er større enn 940px
				navbar[i].style.display ="inline"
				console.log("heia");
			}
		}
		
		else {
			navbar[i].style.display = "none" //gjør at listeleementene ikke vises
			console.log("hei")
			
			if (y.matches){ //dette skal være om skjermen er større enn 940px
				navbar[i].style.display ="inline"
				console.log("heia");
			}
		}
			
			
		}
		
	
	
	
	
}

