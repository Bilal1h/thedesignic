var button = document.getElementById("inr");
var btntext = document.getElementById("btntext")
var ecommerceprice = document.getElementById("ecommerceprice")
var standardprice = document.getElementById("standardprice")
var businessprice = document.getElementById("businessprice")
var simpleprice = document.getElementById("simpleprice")
var wordpressprice = document.getElementById("wordpressprice")
var corporateprice = document.getElementById("corporateprice")




button.addEventListener("click", function() {
    btntext.innerHTML="INR (Selected)"
    ecommerceprice.innerHTML = "245,499 INR"
    standardprice.innerHTML = "81,778 INR"
    businessprice.innerHTML= "53,131 INR"
    simpleprice.innerHTML= "12,198 INR"
    corporateprice.innerHTML="36,758 INR"
    wordpressprice.innerHTML="24,478 INR"
  });