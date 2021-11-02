"use strict";
$(document).ready(function(){
	let getMonthText = function(currentMonth) 
	{
		if (currentMonth === 0) 
		{ 
			return "January"; 
		}
		else if (currentMonth === 1) 
		{
			return "February"; 
		}
		else if (currentMonth === 2) 
		{ 
			return "March"; 
		}
		else if (currentMonth === 3) 
		{ 
			return "April"; 
		}
		else if (currentMonth === 4) 
		{ 
			return "May"; 
		}
		else if (currentMonth === 5) 
		{ 
			return "June"; 
		}
		else if (currentMonth === 6) 
		{ 
			return "July"; 
		}
		else if (currentMonth === 7) 
		{ 
			return "August"; 
		}
		else if (currentMonth === 8) 
		{ 
			return "September"; 
		}
		else if (currentMonth === 9) 
		{ 
			return "October"; 
		}
		else if (currentMonth === 10) 
		{ 
			return "November"; 
		}
		else if (currentMonth === 11)
		{ 
			return "December"; 
		}
	};
	
	let getLastDayofMonth = function(currentMonth) 
	{
		let date = new Date();
		date.setMonth(currentMonth + 1);
		date.setDate(0);
		return date.getDate();
	};
	  
	let currentDay = new Date();
	let thisMonth = currentDay.getMonth();
	  
	// display month and year
	$("#month_year").text(getMonthText(thisMonth) + " " + currentDay.getFullYear() );
	
	let lastDayofMonth = getLastDayofMonth(thisMonth);
	let rows = $("#calendar").html();
	  
	let date; // the current date; eg, the 1st, the 22nd, etc
	let day; // the day of the week; eg, Sat, Sun, etc
	let start;
	  
	// loop through the number of days in the month
	for (let i = 0; i < lastDayofMonth; i++) 
	{
		currentDay.setDate(i + 1);
		date = currentDay.getDate();
		day = currentDay.getDay();
	  
		if (date === 1 || day === 0) 
		{
			rows = rows.concat("<tr>");
		}
	
		if (date === 1 ) 
		{
			start = 0;
			while (start < day) 
			{
				rows = rows.concat("<td></td>");
				start++;
			}
	}
	  
	// add the date to the calendar
	rows = rows.concat("<td>", date, "</td>");
	  
	if (date === lastDayofMonth) 
	{
		start = day;
		while (start < 6) 
		{
			rows = rows.concat("<td></td>");
			start++;
		}
	}
	  
	// end the row if it's the last of the month or the day is Saturday
	if (date === lastDayofMonth || day === 6) 
	{
		rows = rows.concat("</tr>");
	}
} 
	// display calendar rows
	$("#calendar").html(rows);
	});