"use strict";
const $ = function(id) { return document.getElementById(id); };

//Function That Clears the Text Boxes
let clearTemp = () => 
{
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

//Function that changes labels
let toCelsius = () => 
{
   $("degree_label_1").innerHTML = "Enter F degrees:";
   $("degree_label_2").innerHTML = "Degrees Celsius::";
   clearTemp();
};

let toFahrenheit = () =>
{
   $("degree_label_1").innerHTML = "Enter C degrees:";
   $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
   clearTemp();
};

//Function that converts the temperature
let convertTemp = () =>
{
	const calculateCelsius =  ((temperature-32) * 5/9).toFixed(2);
	const calculateFarenheit = ((temperature*5/9) + 32).toFixed(2);

   let temperature = parseInt($("degrees_entered").value);
  
   //Validating temperature
   if(isNaN(temperature)) {
       $("message").innerHTML = ("You must enter a valid number for degrees.");
   }
   else {
       //Checking for corresponding radio button check and then converting
       if($("to_celsius").checked) {
           $("degrees_computed").value = calculateCelsius;
       }
       else {
           $("degrees_computed").value = calculateFarenheit;
       }
   }
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
   $("degrees_entered").focus();
};