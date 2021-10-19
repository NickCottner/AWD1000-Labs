"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
let n = 4;
const SIZELIMIT = 8;
const MINSCORE = 0;
const MAXSCORE = 100;
let i;

let addScore = () =>
{
	let name = $("#name").value;
	let score = $("#score").value;

	if (name === "")
	{
		$("#nameMessage").innerHTML = "Name Must Not Be Blank. Please Reenter A Name.";
	}
	
	else if (score === "")
	{
		$("#scoreMessage").innerHTML = "Score Must Not Be Blank. Please Reenter a Score.";
	}
	else if (isNaN(score))
	{
		$("#scoreMessage").innerHTML = "Score Must Be Numeric. Please Reenter A Numeric Score.";
	}
	else if ((score < MINSCORE) || (score > MAXSCORE))
	{
		$("#scoreMessage").innerHTML = "Out of Range Score Inputted. Please Reenter a Score Between 0 and 100.";
	}
	else if (n < SIZELIMIT) { //check for the array size

		names[n] = name; //add the name to the array
		
		scores[n] = score; //add score to the array
		
		n++; //increment the n size
	}
};

let displayResults = () =>
{
	let highScore;
	let average;
	let name;

	highScore = scores[0];
	name = names[0];
	average = 0;



	for (i = 0; i < n; i++)
	{
		if (scores[i] > highScore )
		{
			highScore = scores[i];
			name = names[i];
		}
		average = average + parseInt(scores[i]);
	}
	
	average = average / n;

	let output = "<h2>Results</h2><br>Average Score = " + average + "<br>High Score = " + name + " with a score of " + highScore;

	$("#results").innerHTML = output;
};

let displayScores = () =>
{
	let output = "<tr><td colspan='2'><h2>Scores</h2></td></tr><tr><td><b>Name</b></td><td><b>Score</b></td></tr> ";

	for (i = 0; i < n; i++) 
	{
	 	output = output + "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>"
	}

	$("#scores").innerHTML = output;
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
	$("#name").focus();
});
