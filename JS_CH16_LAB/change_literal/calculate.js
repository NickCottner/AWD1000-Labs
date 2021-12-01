"use strict";
let isValid = true;
$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        cents = Math.floor(parseInt($("#cents").val()));

        if (coins.isValid) 
        {
            coins.makeChange();

            // display the results of the calculations
            $("#quarters").val(coins.quarters);
            $("#dimes").val(coins.dimes);
            $("#nickels").val(coins.nickels);
            $("#pennies").val(coins.pennies);

            // set focus on cents text box
            $("#cents").focus();
        } 
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() methodcoin.