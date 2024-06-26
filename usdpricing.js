var button = document.getElementById("usd");





var ecommerceprice = document.getElementById("ecommerceprice")
var standardprice = document.getElementById("standardprice")
var businessprice = document.getElementById("businessprice")
var simpleprice = document.getElementById("simpleprice")
var wordpressprice = document.getElementById("wordpressprice")
var corporateprice = document.getElementById("corporateprice")
var btntext = document.getElementById("btntext")
button.addEventListener("click", function() {
    btntext.innerHTML="USD (Default)"
    ecommerceprice.innerHTML = "2999 $"
    standardprice.innerHTML = "999 $"
    businessprice.innerHTML= "649 $"
    simpleprice.innerHTML= "149 $"
    corporateprice.innerHTML="449 $"
    wordpressprice.innerHTML="299 $"
  });