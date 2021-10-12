const MININC1 = 0;
const MAXINC1 = 9875;

const MININC2 = 9875;
const MAXINC2 = 40125;

const MININC3 = 40125;
const MAXINC3 = 85525;

const MININC4 = 85525;
const MAXINC4 = 163300;

const MININC5 = 163300;
const MAXINC5 = 207350;

const MININC6 = 207350;
const MAXINC6 = 518400;

"use strict";
let $ = function (id) {
  return document.getElementById(id); 
};  
 
const processEntry = function()
{
    let income = parseInt($("income").value);

    if (isNaN(income))
    {
      alert("Income Must Be Numeric. Please Enter A Numeric Income.");
      $("income").focus;
      return;
    }
    else if(income <= 0)
    {
      alert("Income Must Be Greater Than 0.");
      $("income").focus();
      return;
    }
    else
    {
      document.querySelector("tax").value = calculateTax(income);
    }

const calculateTax = function()
{
    let taxAmount;

    if (income > MININC1 && income <= MAXINC1)
    {
      taxAmount = income * 0.10;
    } 
    else if (income > MININC2 && income <= MAXINC2)
    {
      taxAmount = (income - MININC2) * 0.12 + 987.50;
    } 
    else if (income > MININC3 && income <= MININC3)
    {
      taxAmount = (income - MININC3) * 0.22 + 4617.50;
    } 
    else if (income > MININC4 && income <= MAXINC4) 
    {
      taxAmount = (income - MININC4) * 0.24 + 14605.50;
    } 
    else if (income > MININC5 && income <= MAXINC5)
    {
      taxAmount = (income - MININC5) * 0.32 + 33271.50;
    } 
    else if (income > MININC6 && income <= MAXINC6) 
    {
      taxAmount = (income - MININC6) * 0.35 + 47367.50;
    } 
    else if (income > 518400) 
    {
      taxAmount = (income - 518400) * 0.37 + 156235.00;
    }
    else
    {
      return taxAmount.toFixed(2);
    }
  }
}

window.onload = function () 
{
  $("calculate").onclick = processEntry;
  $("income").focus();
};
   