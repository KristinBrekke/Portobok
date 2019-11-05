// JavaScript Document

function reset() {
	location.reload();
}

function sendMail(upperName) {
	
	var form = document.getElementById("contact_form");
	form.style.display = "none";
	
	var confirmation = document.getElementById("thank_you");
	confirmation.style.display = "block";
	
	var text = "";
	
	var name = upperName.toLowerCase(); 
	
	var imageDiv = document.getElementById("thank_you");
	
	var wordsInName = name.split(' ').length;
	
	
	if (name.split(' ').length > 1){ // husk at det MÅ være mellomrom mellom anførselstegnene her, ellers deler den opp mellom hver bokstav!!!
		text = "../images/icon_" + name.split(' ')[0] + "_" + name.split(' ')[1] + ".png";
	}
	else {
		text = "../images/icon_" + name + ".png";
	}

	imageDiv.innerHTML = '<img src=' + text + ' alt="designer"/> <p>Tusen takk for din hendvendese! <br> Jeg svarer deg så raskt jeg kan. :) <br> Med vennlig hilsen <br> ' + upperName + ' <br>  <a onClick="reset()">Tilbake</a></p>';
	
	window.scrollTo(0,0);



}







function validate() {

	
	var emailValue = document.getElementById("contact_email").value;
	
	var statusEmail = document.getElementById("email_status");
	statusEmail.innerHTML = "";
	
	
	
	var recieverValue = document.getElementById("mottaker").value;
	
	var statusReciever = document.getElementById("reciever_status");
	statusReciever.innerHTML = "";
	
	
	var subjectValue = document.getElementById("emne").value;
	
	var statusSubject = document.getElementById("subject_status");
	statusSubject.innerHTML = "";
	
	
	var messageValue = document.getElementById("melding").value;
	
	var statusMessage = document.getElementById("message_status");
	statusMessage.innerHTML = "";
	
	
	var designers = document.getElementsByTagName("option");
	
	var designersArray = [];
	
	for (var i=0; i < designers.length; i++){
		designersArray.push(designers[i].value);
	}
	
	
	var validation = 0;
	
	
	if (emailValue.length > 5 && emailValue.includes("@") && emailValue.includes(".")) {
		validation += 1;
	}
	else {
		event.preventDefault(); //trenger jeg denne? bruker den ikke, men den viser et konsept...
		statusEmail.innerHTML = "Mail-addressen er desverre ikke gyldig...";
	}
	
	if (designersArray.includes(recieverValue)){
			validation += 1;
		}
	else{
		event.preventDefault();//trenger jeg denne? bruker den ikke, men den viser et konsept...
		statusReciever.innerHTML = "Vi kan desverre ikke sende til denne mottakeren!..";
	}
	
	if (subjectValue.length < 2){
		event.preventDefault();//trenger jeg denne? bruker den ikke, men den viser et konsept...
		statusSubject.innerHTML = "Vennligst fyll inn et gyldig emne";
	}
	else{
		validation += 1;
		
	}
	
	if 	(messageValue.length < 20){
		event.preventDefault();//trenger jeg denne? bruker den ikke, men den viser et konsept...
		statusMessage.innerHTML = "Teksten må inneholde minst 20 tegn!";
	}
	else{
		validation += 1;
		
	}
	
	if (validation == 4){
		sendMail(recieverValue);
	}
	}








