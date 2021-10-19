"use strict";
let $ = function(id) { return document.getElementById(id); };

let displayCurrentTime = (h,m,s,a) =>
{
    $("hours").innerHTML = h;
    $("minutes").innerHTML = m;
    $("seconds").innerHTML= s;
    $("ampm").innerHTML = a;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() 
{
    setInterval(() =>
    {
        let date = new Date;
        let hours = date.getHours();
        let minutes = padSingleDigit(date.getMinutes());
        let seconds = padSingleDigit(date.getSeconds());
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = padSingleDigit(hours % 12);
        displayCurrentTime(hours, minutes, seconds, ampm)
    } , 1000);
};