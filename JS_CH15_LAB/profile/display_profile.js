"use strict";

$(document).ready( () => {
	// display data from session storage
	$("#email").text( sessionStorage.email );
	$("#phone").text( sessionStorage.phone );
	$("#zip").text( sessionStorage.zip );
	$("#dob").text( sessionStorage.dob );

	sessionStorage.profile = "";
for (var key in userDetails) 
{
	sessionStorage.profile = sessionStorage.profile + key + "=" + userDetails[key] + "|";
}
sessionStorage.profile = sessionStorage.profile.substr(0, sessionStorage.profile.length - 2);
// go to profile page
location.href = "profile.html";
	
	$("#back").click( () => {
		history.back();
	}); // end of click()
	
}); // end of ready()