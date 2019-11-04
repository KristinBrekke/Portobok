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
        <ul class="navbar">
            <li><a href="../html/homepage.html"> <img src="../images/logo_pb.png" alt="logo Portobok" id="logo_portobok"></a></li>
            <li><a href="../html/designers.html">DESIGNERE</a></li>
            <li><a href="../html/projects.html">PROSJEKTER</a></li>
            <li><a href="../html/contact.html">KONTAKT</a></li>
        </ul>
    </div>
    </header>
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