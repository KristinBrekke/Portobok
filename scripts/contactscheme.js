// JavaScript Document

function validate() {
	
	event.preventDefault();
	
	var emailValue = document.getElementById("email").value;
	
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
	
	for (i=0; i<designers.length; i++){
		designersArray.push(designers[i].value);
	}
	
	
	
	if (emailValue.length > 5 && emailValue.includes("@") && emailValue.includes(".")) {
		
	}
	else {
		statusEmail.innerHTML = "Mail-addressen er desverre ikke gyldig...";
	}
	
	if (designersArray.includes(recieverValue)){
			console.log(recieverValue);
		}
	else{
		statusReciever.innerHTML = "Vi kan desverre ikke sende til denne mottakeren!..";
	}
	
	if (subjectValue < 2){
		statusSubject.innerHTML = "Vennligst fyll inn et gyldig emne"
	}
		
	}








