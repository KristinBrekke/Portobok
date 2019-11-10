// JavaScript Document
var projectsObjects = [ /*Bilder av prosjekter, link til prosjekter og tekst om prosjekter */
    {
        href:"project_dina1.html",
        src:"../images/dina_kaffekanne_1.jpg",
        alt:"image of coffee pot made by Dina",
        info:"Design av kaffekanne<br>Dina Westby<br>2019", 
    },
     {
        href:"project_dina2.html",
        src:"../images/dina_terminal_1.jpg",
        alt:"image of terminal made by Dina",
        info:"Design av betalingsterminal<br>Dina Westby<br>2019", 
    },
     {
        href:"project_jennymarie1.html",
        src:"../images/jennymarie_høyttaler_1.png" ,
        alt:"image of speaker made by Jenny Marie",
        info:"Design av høyttaler<br>Jenny Marie<br>2018", 
    },
     {
        href:"project_jennymarie2.html",
        src:"../images/jennymarie_kaffekanne_1.png",
        alt:"image of coffee pot made by Jenny Marie",
        info:"Design av kaffekanne<br>Jenny Marie<br>2019", 
    },
     {
        href:"project_kristin2.html",
        src:"../images/kristin_kaffekanne_1.jpg",
        alt:"image of coffee pot made by Kristin",
        info:"Design av kaffekanne<br>Kristin<br>2019", 
    },
     {
        href:"project_kristin1.html",
        src:"../images/kristin_høyttaler_1.jpg",
        alt:"image of speaker made by Kristin",
        info:"Design av høyttaler<br>Kristin<br>2018", 
    },
     {
        href:"project_oskar1.html",
        src:"../images/oskar_termokanne_1.jpeg",
        alt:"image of coffee pot made by Oskar",
        info:"Design av kaffekanne<br>Oskar<br>2019", 
    },
     {
        href:"project_oskar2.html",
        src:"../images/oskar_ukulele_1.jpg",
        alt:"image of ukulele made by Oskar",
        info:"Design av ukulele<br>Oskar<br>2016", 
    },
     {
        href:"project_solveig2.html",
        src:"../images/solveig_mauren_1.png",
        alt:"image of lamp made by Solveig",
        info:"Design av lampe<br>Solveig<br>2019", 
    },
     {
        href:"project_solveig1.html",
        src:"../images/solveig_kaffekanne_1.jpg",
        alt:"image of coffee pot made by Solveig",
        info:"Design av kaffekanne<br>Solveig<br>2019", 
    },
    
];

var HTMLText = ""; /*Tom streng som skal fylles inn i projectContainer*/

for (var i = 0; i < projectsObjects.length; i++) {
	
    
    if (i%2 == 0) {
			HTMLText += '<div class="row">'; /*Oppretter div row for hvert andre bilde*/
	}

	HTMLText += '<div class="image_element_project"><a href="' + projectsObjects[i].href + '"><img src="' + projectsObjects[i].src + '"alt="'+ projectsObjects[i].alt + '"class="image_designer_and_project"> <p class="image_name_design_dark">' + projectsObjects[i].info + '</p></a></div>' ; /*Legger inn i riktige diver med riktige klasser og henter ut riktige elementer fra arrayen projectsObjects*/
    
    if( (i%2==0) && ((projectsObjects.length%2 == 0) == false) && (i==(projectsObjects.length-1)) ) {/*Lukker div row på det siste elementet uavhengig om det er partall eller oddetall elementer i arrayen*/
        HTMLText += '</div>';
    }
    
	if ((i%2 == 0) == false) { 
		HTMLText += '</div>';
	}
}

document.getElementById("projectContainer").innerHTML = HTMLText; /*Fyller den genererte html-koden inn i projectContainer*/

