// JavaScript Document

function validate() {

	
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
		event.preventDefault();
		statusEmail.innerHTML = "Mail-addressen er desverre ikke gyldig...";
	}
	
	if (designersArray.includes(recieverValue)){
			console.log(recieverValue);
		}
	else{
		event.preventDefault();
		statusReciever.innerHTML = "Vi kan desverre ikke sende til denne mottakeren!..";
	}
	
	if (subjectValue.length < 2){
		event.preventDefault();
		statusSubject.innerHTML = "Vennligst fyll inn et gyldig emne"
	}
	
	if 	(messageValue.length < 20){
		event.preventDefault();
		statusMessage.innerHTML = "Teksten må inneholde minst 20 tegn!"
	}
	
	}








