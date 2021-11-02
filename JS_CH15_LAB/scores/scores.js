const MINSCORE = 0;
const MAXSCORE = 100;

"use strict";
let $ = function (id) { 
    return document.getElementById(id); 
};

let scores = [];
let names = [];
let i = 0;
let sum = 0;

let displayScores = () => {   
    
    // loop to display scores and add up the sum of all entries
    while (i < names.length) {
        $("scores").value += names[i] + "\n";
        sum += parseFloat(scores[i]);
        i++;
    }
    
    // calculates and displays average scores
    let average = sum / names.length;
    $("average_score").innerHTML = average;
};


let addScore = () =>{
    if ($("first_name").value == "")
    {
        alert("First Name Must Not Be Blank. Please Enter a First Name.");
        $("first_name").focus();
    }
    else if ($("last_name").value == "")
    {
        alert("Last Name Must Not Be Blank. Please Enter a Last Name.");
        $("last_name").focus();
    }
    else if (isNaN($("score").value))
    {
        alert("Score Entered is Not Numeric. Please Enter A Numeric Score.")
        $("score").focus();
    }
    else if ($("score").value == "")
    {
        alert("Score Entered Must Not Be Blank. Please Enter a Score Between 0 and 100.")
        $("score").focus();
    }
    else if (($("score").value < MINSCORE) || ($("score").value > MAXSCORE))
    {
        alert("Score Entered is Out of Range. Please Enter a Score Between 0 and 100.")
        $("score").focus();
    }
    else
    {
        parseFloat(scores.push($("score").value));
        names.push(($("last_name").value) + ", " + ($("first_name").value) + " : " + ($("score").value));
        displayScores();

        // get the add form ready for next entry
        $("first_name").value = "";
        $("last_name").value = "";
        $("score").value = "";
        $("first_name").focus();
    }    
};

let clearScores = () => {   
    
    // clears the arrays of any data
    scores = [];
    names = [];
    
    // remove the score data from the web page
    $("average_score").value = "";
    $("first_name").value = "";
    $("last_name").value = "";
    $("scores").value = "";
    $("score").value = "";
    
    // brings cursor back to first name entry text box
    $("first_name").focus();
};

var sortScores = function () { 
    
    // clears value of text box before showing the sorted array
    $("scores").value = "";
    
    // creates a variable that has the sorted array
    var sort = names.sort();
    
    // loop to display newly sorted list
    for (i = 0; i < names.length; i++) {
        $("scores").value += sort[i] + "\n";
    }
    
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};

