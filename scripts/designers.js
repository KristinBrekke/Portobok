// JavaScript Document

var designersObjects = [
    { 
        href: "dina.html",
        src: "../images/dina.jpg",
        alt: "image of Dina", 
        src_icon: "../images/icon_dina.png",
        alt_icon: "icon of Dina",
        image_name: "image_name_right",
        name: "Dina Westby"   
    },
     { 
        href: "jenny_marie.html",
        src: "../images/jenny_marie.jpg",
        alt: "image of Jenny Marie", 
        src_icon: "../images/icon_jenny_marie.png",
        alt_icon: "icon of Jenny Marie",
        image_name: "image_name_left",
        name: "Jenny Marie Jakobsen"   
    },
     { 
        href: "kristin.html",
        src: "../images/kristin.jpg",
        alt: "image of Kristin", 
        src_icon: "../images/icon_kristin.png",
        alt_icon: "icon of Kristin",
        image_name: "image_name_right",
        name: "Kristin Brekke"   
    },
     { 
        href: "oskar.html",
        src: "../images/oskar.jpg",
        alt: "image of Oskar", 
        src_icon: "../images/icon_oskar.png",
        alt_icon: "icon of Oskar",
        image_name: "image_name_left",
        name: "Oskar Keller"   
    },
     { 
        href: "solveig.html",
        src: "../images/solveig.jpg",
        alt: "image of Solveig", 
        src_icon: "../images/icon_solveig.png",
        alt_icon: "icon of Solveig",
        image_name: "image_name_right",
        name: "Solveig Kavli"   
    },
];

var HTMLText = "";

for (var i = 0; i < designersObjects.length; i++) {
	
    
    if (i%2 == 0) {
			HTMLText += '<div class="row">';
	}

	HTMLText += '<div class="image_element"><a href="' + designersObjects[i].href + '"><img src="' + designersObjects[i].src + '"alt="'+designersObjects[i].alt + '"class="image_designer_and_project"><div class="icon"><img src="' + designersObjects[i].src_icon + '" alt="' + designersObjects[i].alt_icon + '" class="icon"></div> <p class="' + designersObjects[i].image_name + '">' + designersObjects[i].name + '</p></a></div>' ;
    
    if( (i%2==0) && ((designersObjects.length%2 == 0) == false) && (i==(designersObjects.length-1)) ) {
        HTMLText += '</div>';
    }
    
	if ((i%2 == 0) == false) {
		HTMLText += '</div>';
	}
}

document.getElementById("designerContainer").innerHTML = HTMLText;


