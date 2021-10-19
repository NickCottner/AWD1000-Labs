"use strict";
let $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
let stopwatchTimer;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

let displayCurrentTime = ()  =>
{
    let now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) 
    { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } 
    else 
    { // adjust 12 noon and 12 midnight
        switch (hours) 
        {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

let padSingleDigit = (num) =>
{
	if (num < 10) 
    {	
        return "0" + num; 
    }
	else 
    {
        return num; 
    }
};

let tickStopwatch = () => 
{  
    // increment milliseconds by 10 milliseconds
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    // if seconds total 60, increment minutes by one and reset seconds to zero
    //display new stopwatch time
    elapsedMilliseconds = elapsedMilliseconds + 10;

    if (elapsedMilliseconds == 1000)
    {
        elapsedMilliseconds = 0;
        elapsedSeconds = elapsedSeconds + 1;
    }
    else if(elapsedSeconds == 60)
    {
        elapsedSeconds = 0;
        elapsedMinutes = elapsedMinutes + 1;
    }
    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;
    $("s_seconds").firstChild.nodeValue = elapsedSeconds;
    $("s_minutes").firstChild.nodeValue = elapsedMinutes;   
};

// event handler functions
let startStopwatch = (evt) =>
{
    // prevent default action of link  
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    let eventHandler = () =>
    {
        if (!evt)
        {
            evt = window.event
        }

        if (evt.preventDefault) 
        {
            evt.preventDefault();
        }
        else 
        {
            evt.returnValue = false;
        }
    };
    tickStopwatch;
    stopwatchTimer = setInterval (tickStopwatch, 10);
};

let stopStopwatch = (evt) =>
{
    // prevent default action of link
    let eventHandler = () =>
    {
        if (!evt)
        {
            evt = window.event
        }
        
        if (evt.preventDefault) 
        {
            evt.preventDefault();
        }
        else 
        {
            evt.returnValue = false;
        }
    };   
    // stop timer    
    clearInterval (stopwatchTimer);  
};

let resetStopwatch = (evt) =>
{   // prevent default action of link
    let eventHandler = () =>
    {
        if (!evt)
        {
            evt = window.event
        }
        
        if (evt.preventDefault) 
        {
            evt.preventDefault();
        }
        else 
        {
            evt.returnValue = false;
        }
        
    };   

    // stop timer
    clearInterval (stopwatchTimer);  

    // reset elapsed variables and clear stopwatch display
    elapsedMilliseconds = 0;
    elapsedSeconds = 0;
    elapsedMinutes = 0;
    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;
    $("s_seconds").firstChild.nodeValue = elapsedSeconds;
    $("s_minutes").firstChild.nodeValue = elapsedMinutes;
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $("start").onclick = startStopwatch;
    $("stop").onclick = stopStopwatch;
    $("reset").onclick = resetStopwatch;
};