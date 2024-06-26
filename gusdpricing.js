var button = document.getElementById("usd");






var doublecorprice = document.getElementById("doublecorprice")
var doublesideprice = document.getElementById("doublesideprice")
var singlecardprice = document.getElementById("singlecardprice")
var unlimitedbprice = document.getElementById("unlimitedbprice")
var standardbprice = document.getElementById("standardbprice")
var basicbprice = document.getElementById("basicbprice")
var basiclogoprice = document.getElementById("basiclogoprice")
var standardlogoprice = document.getElementById("standardlogoprice")
var unlimitedlogoprice = document.getElementById("unlimitedlogoprice")
var btntext = document.getElementById("btntext")

button.addEventListener("click", function() {
    btntext.innerHTML="USD (Default)"
    doublecorprice.innerHTML="150$"
    doublesideprice.innerHTML="50$"
    singlecardprice.innerHTML="15$"
    unlimitedbprice.innerHTML="99$"
    unlimitedlogoprice.innerHTML="149$"
    basicbprice.innerHTML="29$"
    basiclogoprice.innerHTML="49$"
    standardbprice.innerHTML="49$"
    standardlogoprice.innerHTML="79$"
  });