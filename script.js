cont form = document.querySelector("form");

form.addEventListener("submit", function(event){
	event.preventDefault();

	alert("Thank you. Your details have been recieved");
});