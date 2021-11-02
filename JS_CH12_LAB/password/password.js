"use strict";
const MINCHAR = 1;
const MAXCHAR = 15;

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let password = "";
        let start, stop, char;

        let num = parseInt($("#num").val());

        if(isNaN(num))
        {
            alert("Please Enter a Valid Number");
        }
        else if ((num < MINCHAR) || (num > MAXCHAR))
        {
            alert("Please Enter a Valid Number Within 1 to 10.")
        }
        else
        {
            for (let i = 0; i < num; i++)
            {
                start = getRandomNumber(chars.length);
                stop = start + 1;
                char = chars.substring(start, stop);

                password = password += char;
            }
            $("#password").val(password);
        }
        
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()