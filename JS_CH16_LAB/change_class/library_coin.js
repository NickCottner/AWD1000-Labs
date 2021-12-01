"use strict";
const MINCENT = 1;
const MAXCENT = 99;
class Coins
{
    constructor()
    {
        this.quarters = 0;
        this.dimes = 0;
        this.nickels = 0;
        this.pennies = 0;
    }
    makeChange(cents)
    {
        if (cents === "")
        {
            throw new Error("Cents Must Not Be Blank. Please Enter A Value Between 1 and 99.");
        }
        else if (isNaN(cents))
        {
            throw new Error("Cents Must Be Numeric. Please Enter A Value Between 1 and 99.")
        }
        else if((cents < MINCENT)||(cents > MAXCENT))
        {
            throw new Error("Cents Entered Is Out Of Range. Please Enter A Value Between 1 and 99.")
        }
        else
        {
            //Gets The Quarters
            let quarters = this.quarters;
            quarters = cents / 25;
            quarters = Math.floor(this.quarters);
            cents = cents % 25;

            //Gets The Dimes
            let dimes = this.dimes;
            dimes = cents / 10;
            dimes = Math.floor(this.dimes);
            cents = cents % 10;

            //Gets The NIckels
            let nickels = this.nickels;
            nickels = cents / 5;
            quarters = Math.floor(this.nickels);

            //Gets The Pennies
            let pennies = this.pennies;
            pennies = cents % 5;
        }
    }
}
