"use strict";
const MINCENT = 1;
const MAXCENT = 99


let coins =
{
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
    get isValid()
    {
        if (isNaN(cents))
        {
            throw new Error("Cents Entered is Not Numeric");
        }
        else if ((cents < MINCENT) || (cents > MAXCENT))
        {
            throw new Error("Cents Entered is Out Of Range, Please Enter A Value Between 1 and 99.");
        }
        else if (cents == "")
        {
            throw new Error("NO Cents Entered. Please Enter A Value Between 1 and 99.");
        }
        else
        {
            return true;
        }
    },
    makeChange(cents)
    {
        //Get the Number of Quarters
        let quarters = coins.quarters;
        quarters = cents / 25;
        quarters = Math.floor(quarters);
        cents = cents % 25;

        //Get The Number of Dimes
        let dimes = coins.dimes;
        dimes = cents / 10;
        dimes = Math.floor(dimes);
        cents = cents % 10;

         //Get The Number of Nickels
        let nickels = coins.nickels;
        nickels = cents / 5;
        nickels = Math.floor(nickels);

        //Get The Number of Pennies
        let pennies = coins.pennies;
        pennies = cents % 5;
    }
}