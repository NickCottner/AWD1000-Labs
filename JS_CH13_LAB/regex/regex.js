"use strict";
const $ = function(id) { return document.getElementById(id); };

let validatePhone = () => 
{
    var phone = $("phone").value;
    let originalPattern = /^\d{3}-\d{3}-\d{4}$/; // 999-999-9999
    let pattern1 = /^\d{1}-\d{3}-\d{3}-\d{4}$/; // 1-999-999-9999
    let pattern2 = /^\d{3}.\d{3}.\d{4}$/; // 999-999-9999
    let pattern3 = /^\d{1}.\d{3}.\d{3}.\d{4}$/; // 1-999-999-9999
    let pattern4 = /^\(\d{3}\)-\d{3}-\d{4}$/; // 999-999-9999
    let pattern5 = /^\(\d{3}\).\d{3}.\d{4}$/; // 999-999-9999
    let pattern6 = /^\(\d{1}\)-\d{3}-\d{3}-\d{4}$/; // 1-999-999-9999
    let pattern7 = /^\(\d{1}\).\d{3}.\d{3}.\d{4}$/; // 1-999-999-9999

    let isValid = originalPattern.test(phone);
    let isValid1 = pattern1.test(phone);
    let isValid2 = pattern2.test(phone);
    let isValid3 = pattern3.test(phone);
    let isValid4 = pattern4.test(phone);
    let isValid5 = pattern5.test(phone);
    let isValid6 = pattern6.test(phone);
    let isValid7 = pattern7.test(phone);
    $("message").innerHTML = (isValid|isValid1|isValid2|isValid3|isValid4|isValid5|isValid6|isValid7) ? "Valid phone number" : "Invalid phone number";
};

window.onload = function() {
$("validate").onclick = validatePhone;
$("phone").value = "123-456-7890"; // set default phone number
};