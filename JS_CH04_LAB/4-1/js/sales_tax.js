const MINSUBTOTAL = 0;
const MAXSUBTOTAL = 10000;

const MINTAXRATE = 0;
const MAXTAXRATE = 12;

let $ = function (id) {
    return document.getElementById(id); 
};  
   

const processEntries = function()
{
    let subtotal = parseFloat($("subtotal").value);
    let taxRate = parseFloat($("tax_rate").value);
    let isValid = true;

    if (isNaN(subtotal))
    {
        alert("Subtotal Must Me Numeric. Please Enter A Numeric Subtotal Between 0 and 10000.");
        $("subtotal").focus;
        isValid = false;
    }
    else if((subtotal < MINSUBTOTAL) || (subtotal > MAXSUBTOTAL))
    {
        alert("Subtotal must be > 0 and < 10000.");
        $("subtotal").focus();
        isValid = false;
    }
    else
    {
        $("subtotal").nextElementSibling.firstChild.nodeValue = "";
    }
     if (isNaN(taxRate))
    {
        alert("Tax Rate Must Me Numeric. Please Enter A Numeric Tax Rate Between 0 and 12.");
        $("tax_rate").focus();
        isValid = false;
    }
    else if((taxRate < MINTAXRATE) || (taxRate > MAXTAXRATE))
    {
        alert("Tax Rate must be > 0 and < 12.");
        $("tax_rate").focus();
        isValid = false;
    }
    else
    {
        $("tax_rate").nextElementSibling.firstChild.nodeValue = "";
    }
    if (!isValid)
    {
        salesTaxEntry = (subtotal * (taxRate/100))
        salexTaxTotal  = subtotal + salesTaxEntry;
        console.log(salesTaxEntry);
        console.log(salesTaxTotal);
        $("sales_tax").value = salesTaxEntry;
        $("total").value = salesTaxTotal;
    }
}
    const clearEntries = function()
    {
        $("subtotal").value = "";
        $("tax_rate").value = "";
        $("sales_tax").value = "";
        $("total").value = "";
        $("subtotal").focus();
    }

window.onload = function () 
{
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("subtotal").focus();
};
     