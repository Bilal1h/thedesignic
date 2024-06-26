
document.addEventListener("DOMContentLoaded", function() {
    // your code here

  


const checkbox = document.getElementById("radiobtn1");
checkbox.addEventListener("change", toggleNavbarStyle);
    
function toggleNavbarStyle() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("white");
  }

const toggleSwitch = document.querySelector('#radiobtn1');
const body = document.querySelector('body');
const navbar = document.getElementById("navbar");
const navlinks1 = document.getElementById("nav-linkss1");
const navlinks2 = document.getElementById("nav-linkss2");
const navlinks3 = document.getElementById("nav-linkss3");
const navlinks4 = document.getElementById("nav-linkss4");
const navlinks5 = document.getElementById("nav-linkss5");
const navlinks6 = document.getElementById("nav-linkss6");
const navlinks7 = document.getElementById("nav-linkss7");
const thedesign = document.getElementById("thedesignic")
const logohead=document.getElementById("logo-design")
const webhead=document.getElementById("web-design")
const bcardhead=document.getElementById("bcard-design")





toggleSwitch.addEventListener('change', switchTheme);

// navbar.style.backgroundColor="black"

navbar.style.backgroundColor = "rgb(200, 200, 200)";

function switchTheme(e) {
    if (e.target.checked) {
        body.style.backgroundColor = "white";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        logohead.style.color="black"
        webhead.style.color="black"
        bcardhead.style.color="black"

    } else {
        body.style.backgroundColor = "black";
        toggleSwitch.style.backgroundColor= "#1976d2"
        
        navlinks1.style.color = "white";
        navlinks2.style.color = "white";
        navlinks3.style.color = "white";
        navlinks4.style.color = "white";
        navlinks5.style.color = "white";
        navlinks6.style.color = "black";
        navlinks7.style.color = "black";
        thedesign.style.color="white";
        logohead.style.color="white"
        webhead.style.color="white"
        bcardhead.style.color="white"

        
        
        
}
}
});