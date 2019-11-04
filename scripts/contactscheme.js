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
	
	
	var designers = document.getElementById("mottaker_alternativer");
	
	var designersArray = designers.getElementsByTagName("option").text;
	
	
	console.log(designersArray);
	
	
	if (emailValue.length > 5 && emailValue.includes("@") && emailValue.includes(".")) {
		
	}
	else {
		statusEmail.innerHTML = "The email address is not valid!";
	}
	
	if (recieverValue ){}
		
	}