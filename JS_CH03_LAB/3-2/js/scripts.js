const MINSCORE = 0;
const MAXSCORE = 100
        
let score;
let again = "y";
let html;

do
{
    let score = parseInt(prompt("Enter number grade from 0 through 100:\nOr Enter 999 to End Entries:"));
    
    if(score === 999)
    {
        alert(`You entered 999, and chose to end the program`);
        again = false;
        break;
    }
  
    if((isNaN(score)) || (score < MINSCORE) || (score > MAXSCORE))
    {
        alert(`You Entered ${score} \nPlease Enter A Numeric Score Between 0 and 100.`);
    }
    else if(score >= 88)
    {
        let html = `Grade ${score} is an A. <br><br>`;
        document.write(html);   
    }
    else if((score < 88) && (score >= 80))
    {
        let html = `Grade ${score} is a B. <br><br>`;
        document.write(html);   
    }
    else if((score < 80) && (score >= 68))
    {
        let html = `Grade ${score} is an C.<br><br>`;
        document.write(html);
    }
    else if((score < 67) && (score >= 60))
    {
        let html = `Grade ${score} is an D. <br><br>`;
        document.write(html); 
    }
    else
    {
        let html = `Grade ${score} is an F. <br><br>`;
        document.write(html);
    }
    
    again = prompt("Repeat Entrie (y/n) ?", "y");
}
while(again === "y");

