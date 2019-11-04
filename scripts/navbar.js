// JavaScript Document
hamburger()
document.getElementById("navbar-placeholder").innerHTML = 
    `<html>
<head>
<meta charset="utf-8">
<title>Navbar</title>
<link rel="stylesheet" type="text/css" href="../style.css">
</head>

<body>
    <header>
        <div id="blokk">
        <label for= "box">&#9776</label>
			<input type = "checkbox" id ="box"/>
			<ul class="navbar">
            <li><a href="../html/homepage.html"> <img src="../images/logo_pb.png" alt="logo Portobok" id="logo_portobok"></a></li>
            <li><a href="../html/designers.html">DESIGNERE</a></li>
            <li><a href="../html/projects.html">PROSJEKTER</a></li>
            <li><a href="../html/contact.html">KONTAKT</a></li>
        </ul>
    </div>
	
	 <!--solveig putter inn hamburgerkode her -->
		<!--<label for= "box">&#9776</label>
			<input type = "checkbox" id ="box"/>-->
		<!--kan bruke koden som allerede er her-->
			<!--<div class="hamburger">
            <a href="../html/homepage.html"> <img src="../images/logo_pb.png" alt="logo Portobok" id="logo_portobok2"></a>
            <a href="../html/designers.html">DESIGNERE</a>
			<a href="../html/projects.html">PROSJEKTER</a>
            <a href="#">KONTAKT</a>
			</div>-->
    </header>
<script href= "navbar.js"> </script>	
</body>
</html>
    `

function hamburger ();
var x= document.getElementById("box");
var navbar = document.getElementsByClassName("navbar")
for (var i =0, navbar.length, i++);

	if x.checked {
		navbar[i].style.display = "block";
}