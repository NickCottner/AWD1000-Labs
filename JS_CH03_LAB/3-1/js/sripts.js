const MINTEMP = -100;
const MAXTEMP = 212;
        
let fTemp;
let cTemp;
let again = "y";
             
do 
{
   let fTemp = parseFloat(prompt("Please Enter a Temperature Between -100 and 212")).toFixed(1);

   if ((isNaN(fTemp)) || (fTemp < MINTEMP) || (fTemp > MAXTEMP))
   {
       alert(`You Entered ${fTemp} \nPlease Enter A Numeric Temperature Between -100 and 212.`)
   }
   else
   {
        cTemp = ((fTemp - 32) * 5/9).toFixed(1);

        let html = `<p>${fTemp} F = ${cTemp} C`;

        document.write(html);
   }
   again = prompt("Repeat Entries? (y/n)" , "y");
} 
while (again == "y");