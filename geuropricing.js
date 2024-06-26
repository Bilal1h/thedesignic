var button = document.getElementById("euro");
var usdbtn = document.getElementById("usd")
var btntext = document.getElementById("btntext")
var doublecorprice = document.getElementById("doublecorprice")
var doublesideprice = document.getElementById("doublesideprice")
var singlecardprice = document.getElementById("singlecardprice")
var unlimitedbprice = document.getElementById("unlimitedbprice")
var standardbprice = document.getElementById("standardbprice")
var basicbprice = document.getElementById("basicbprice")
var basiclogoprice = document.getElementById("basiclogoprice")
var standardlogoprice = document.getElementById("standardlogoprice")
var unlimitedlogoprice = document.getElementById("unlimitedlogoprice")


button.addEventListener("click", function() {

    btntext.innerHTML="EURO (Selected)"
    doublecorprice.innerHTML="126.04 €"
    doublesideprice.innerHTML="42.01 €"
    singlecardprice.innerHTML="12.60 €"
    unlimitedbprice.innerHTML="82.74 €"
    unlimitedlogoprice.innerHTML="124.26 €"
    basicbprice.innerHTML="23.92 €"
    basiclogoprice.innerHTML="40.45 €"
    standardbprice.innerHTML="40.45 €"
    standardlogoprice.innerHTML="65.37 €"
    
  });
  