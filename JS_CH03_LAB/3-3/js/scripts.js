const MINNUM = 1;
const MAXNUM = 100;
let sum = 0;
let html;

do
{
    do
    {
        let number = parseInt(prompt("Please Enter Any Top Number\n From 1 to 100"))

        if((isNaN(number)) || (number < MINNUM) || (number > MAXNUM))
        {
            alert(`You Entered ${number}, Please Enter a Numeric Number Between 1 and 100`);
        }
        else
        {
            for(let i = 1; i <= number; i++)
            {
                sum = sum + i;
            }
            let html = (`The Sum of the Number 1 through ${number} is ${sum}.<br><br>`);
            document.write(html);
        } 
        break;
    }
    while(true)
    {
        let question = prompt("Do Another Sum? (y/n)", "y")
        if(question === "y")
        {
            continue
        }
        else
        {
            alert("You Have Chosen To Stop Inputting Numbers\nClick Ok To View Results.")
            break;
        }
    }
}
while(true)