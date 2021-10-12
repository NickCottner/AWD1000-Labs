const MINCENTS = 0;
const MAXCENTS = 99;

let $ = function (id) {
    return document.getElementById(id); 
};  
   
const processEntry = function()
{
    let cent = parseInt($("cents").value);
    let isValid = true;

    if (isNaN(cent))
    {
        alert("Cent Must Me Numeric. Please Enter A Numeric Cent Between 0 and 99.");
        $("cents").focus;
        isValid = false;
    }
    else if((cent < MINCENTS) || (cent > MAXCENTS))
    {
        alert("Cents must be > 0 and < 99.");
        $("cents").focus();
        isValid = false;
    }
    else
    {
        $("cents").nextElementSibling.firstChild.nodeValue = "";
    }
    if (isValid)
    {
        makeChange();
    }
}

const makeChange = function()
{
    //Quarters
    let quarters = Math.floor(cents / 25);
    cents %= 25;
    $("quarters").value = quarters
    
    //Dimes
    let dimes = Math.floor(cents / 10);
    cents %= 10;
    $("dimes").value = dimes
    
    //Nickels
    var nickels = Math.floor(cents / 5);
    cents %= 5;
    $("nickels").value = nickels
    
    //Pennies
    var pennies = Math.floor(cents / 1);
    cents %= 1;
    $("pennies").value = pennies
}

window.onload = function () 
{
    $("calculate").onclick = processEntry;
    $("cents").focus();
};
     