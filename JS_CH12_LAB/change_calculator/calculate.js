"use strict";
const MINCENTS = 0;
const MAXCENTS = 99;

let $ = function (id) {
    return document.getElementById(id); 
};  

let calculateChange = () =>
        {
            let cents = parseInt($("cents").value);

        if((cents < MINCENTS) || (cents > MAXCENTS))
        {
            alert("Cents Inputted is Out of Range. Please Enter a Number Between 0 and 99.");
            $("cents").focus();
        }
        else if (isNaN(cents))
        {
           alert("Cents Inputted is Not Numeric. Please Enter a Number Between 0 and 99."); 
           $("cents").focus();
        }
        else
        {
            let quarters = 0
            let dimes = 0;
            let nickels = 0;
            let pennies = 0;

            //Gets The Number of Quarters
            quarters = Math.floor(cents/25);
            cents = cents - quarters * 25;
            $("quarters").value = quarters;

            //Gets The Number of Dimes
            dimes = Math.floor(cents/10);
            cents = cents - dimes * 10;
            $("dimes").value = dimes;

            //Gets The Number of Nickels
            nickels = Math.floor(cents/5);
            cents = cents - nickels * 5;
            $("nickels").value = nickels;

            //Gets The Number of Pennies
            pennies = cents
            $("pennies").value = pennies;
        }
    }

    window.onload = function () 
    {
    $("calculate").onclick = calculateChange;
    $("cents").focus();
    };