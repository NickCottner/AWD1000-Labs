"use strict";

$(document).ready( () => {
	// display data from session storage
	document.getElementById("email").innerHTML = sessionStorage.getItem("email");
	document.getElementById("phone").innerHTML = sessionStorage.getItem("phone");
	document.getElementById("zip").innerHTML = sessionStorage.getItem("zip");
	document.getElementById("dob").innerHTML = sessionStorage.getItem("dob");

	$("back").click( () => 
	{
		history.back();
	});
	
}); // end of ready()