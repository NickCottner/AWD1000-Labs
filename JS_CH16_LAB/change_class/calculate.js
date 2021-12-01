"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

            let coin = new Coins(cents)
            if(coin.makeChange());
            // display the results of the calculations
            $("#quarters").val(coin.quarters);
            $("#dimes").val(coin.dimes);
            $("#nickels").val(coin.nickels);
            $("#pennies").val(coin.pennies);
            
            // set focus on cents text box
            $("#cents").focus();
 
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method