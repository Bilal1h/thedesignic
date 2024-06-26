var button = document.getElementById("euro");
var btntext = document.getElementById("btntext")
var ecommerceprice = document.getElementById("ecommerceprice")
var standardprice = document.getElementById("standardprice")
var businessprice = document.getElementById("businessprice")
var simpleprice = document.getElementById("simpleprice")
var wordpressprice = document.getElementById("wordpressprice")
var corporateprice = document.getElementById("corporateprice")
button.addEventListener("click", function() {
    btntext.innerHTML="EURO (Selected)"
    ecommerceprice.innerHTML = "2,749 €"
    standardprice.innerHTML = "915 €"
    businessprice.innerHTML= "594 €"
    simpleprice.innerHTML= "136 €"
    corporateprice.innerHTML="411 €"
    wordpressprice.innerHTML="274 €"
  });
  