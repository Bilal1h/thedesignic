 var button = document.getElementById("pkr");
 var btntext = document.getElementById("btntext")



 var ecommerceprice = document.getElementById("ecommerceprice")
 var standardprice = document.getElementById("standardprice")
 var businessprice = document.getElementById("businessprice")
 var simpleprice = document.getElementById("simpleprice")
 var wordpressprice = document.getElementById("wordpressprice")
 var corporateprice = document.getElementById("corporateprice")
 button.addEventListener("click", function() {
   btntext.innerHTML="PKR (Selected)"
   ecommerceprice.innerHTML = "851,716 PKR"
   standardprice.innerHTML = "283,716 PKR"
   businessprice.innerHTML= "184,316 PKR"
   simpleprice.innerHTML= "56,516 PKR"
   corporateprice.innerHTML="127,516 PKR"
   wordpressprice.innerHTML="84,916 PKR"
 });

