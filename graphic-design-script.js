
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

const gdesignhead = document.getElementById("gdesignhead")


const logoweb = document.getElementById("logoweb")

const basiclogo = document.getElementById("basiclogo")
const standardlogo = document.getElementById("standardlogo")
const unlimitedlogo = document.getElementById("unlimitedlogo")




const basic1 = document.getElementById("basic1")
const basic2 = document.getElementById("basic2")
const basic3 = document.getElementById("basic3")
const basic4 = document.getElementById("basic4")
const basic5 = document.getElementById("basic5")
const basic6 = document.getElementById("basic6")
const basic7 = document.getElementById("basic7")
const basic8 = document.getElementById("basic8")




const standard1 = document.getElementById("standard1")
const standard2 = document.getElementById("standard2")
const standard3 = document.getElementById("standard3")
const standard4 = document.getElementById("standard4")
const standard5 = document.getElementById("standard5")
const standard6 = document.getElementById("standard6")




const unlimited1 = document.getElementById("unlimited1")
const unlimited2 = document.getElementById("unlimited2")
const unlimited3 = document.getElementById("unlimited3")
const unlimited4 = document.getElementById("unlimited4")
const unlimited5 = document.getElementById("unlimited5")
const unlimited6 = document.getElementById("unlimited6")
const unlimited7 = document.getElementById("unlimited7")


// Brouchure start
const broucherhead = document.getElementById("brouchurehead")

const basicbrouchure = document.getElementById("basic-brouchure")
const standardbrouchure = document.getElementById("standardbrouchure")
const unlimitedbrouchure = document.getElementById("unlimitedbrouchure")




const brouchurebasic1 = document.getElementById("brouchurebasic1")
const brouchurebasic2 = document.getElementById("brouchurebasic2")
const brouchurebasic3 = document.getElementById("brouchurebasic3")
const brouchurebasic4 = document.getElementById("brouchurebasic4")
const brouchurebasic5 = document.getElementById("brouchurebasic5")




const brouchurestandard1 = document.getElementById("brouchurestandard1")
const brouchurestandard2 = document.getElementById("brouchurestandard2")
const brouchurestandard3 = document.getElementById("brouchurestandard3")
const brouchurestandard4 = document.getElementById("brouchurestandard4")





const unlimitedbrouchure1 = document.getElementById("unlimitedbrouchure1")
const unlimitedbrouchure2 = document.getElementById("unlimitedbrouchure2")
const unlimitedbrouchure3 = document.getElementById("unlimitedbrouchure3")
const unlimitedbrouchure4 = document.getElementById("unlimitedbrouchure4")
const unlimitedbrouchure5 = document.getElementById("unlimitedbrouchure5")

// business card start
const bcardhead = document.getElementById("bcardhead")

const singlehead = document.getElementById("singlehead")
const doublehead = document.getElementById("doublehead")
const doublecorporate = document.getElementById("doublecorporate")




const singlecard1 = document.getElementById("singlecard1")
const singlecard2 = document.getElementById("singlecard2")
const singlecard3 = document.getElementById("singlecard3")
const singlecard4 = document.getElementById("singlecard4")
const singlecard5 = document.getElementById("singlecard5")
const singlecard6 = document.getElementById("singlecard6")
const singlecard7 = document.getElementById("singlecard7")
const singlecard8 = document.getElementById("singlecard8")


const doublecard1 = document.getElementById("doublecard1")
const doublecard2 = document.getElementById("doublecard2")
const doublecard3 = document.getElementById("doublecard3")
const doublecard4 = document.getElementById("doublecard4")
const doublecard5 = document.getElementById("doublecard5")
const doublecard6 = document.getElementById("doublecard6")
const doublecard7 = document.getElementById("doublecard7")
const doublecard8 = document.getElementById("doublecard8")

const doublecorcard1 = document.getElementById("doublecorcard1")
const doublecorcard2 = document.getElementById("doublecorcard2")
const doublecorcard3 = document.getElementById("doublecorcard3")
const doublecorcard4 = document.getElementById("doublecorcard4")
const doublecorcard5 = document.getElementById("doublecorcard5")
const doublecorcard6 = document.getElementById("doublecorcard6")
const doublecorcard7 = document.getElementById("doublecorcard7")
const doublecorcard8 = document.getElementById("doublecorcard8")











toggleSwitch.addEventListener('change', switchTheme);

// navbar.style.backgroundColor="black"

navbar.style.backgroundColor = "rgb(200, 200, 200)";

function switchTheme(e) {
    if (e.target.checked) {
        body.style.backgroundColor = "white";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        gdesignhead.style.color="black"
        logoweb.style.color="black"
        basiclogo.style.backgroundColor="white"
        standardlogo.style.backgroundColor="white"
        unlimitedlogo.style.backgroundColor="white"
        basiclogo.style.color="black"
        standardlogo.style.color="black"
        unlimitedlogo.style.color="black"


        basic1.style.backgroundColor="white"
        basic1.style.color="black"
        basic2.style.backgroundColor="white"
        basic2.style.color="black"
        basic3.style.backgroundColor="white"
        basic3.style.color="black"
        basic4.style.backgroundColor="white"
        basic4.style.color="black"
        basic5.style.backgroundColor="white"
        basic5.style.color="black"
        basic6.style.backgroundColor="white"
        basic6.style.color="black"
        basic7.style.backgroundColor="white"
        basic7.style.color="black"
        basic8.style.backgroundColor="white"
        basic8.style.color="black"




        standard1.style.backgroundColor="white"
        standard1.style.color="black"
        standard2.style.backgroundColor="white"
        standard2.style.color="black"
        standard3.style.backgroundColor="white"
        standard3.style.color="black"
        standard4.style.backgroundColor="white"
        standard4.style.color="black"
        standard5.style.backgroundColor="white"
        standard5.style.color="black"
        standard6.style.backgroundColor="white"
        standard6.style.color="black"
     


        unlimited1.style.backgroundColor="white"
        unlimited1.style.color="black"
        unlimited2.style.backgroundColor="white"
        unlimited2.style.color="black"
        unlimited3.style.backgroundColor="white"
        unlimited3.style.color="black"
        unlimited4.style.backgroundColor="white"
        unlimited4.style.color="black"
        unlimited5.style.backgroundColor="white"
        unlimited5.style.color="black"
        unlimited6.style.backgroundColor="white"
        unlimited6.style.color="black"
        unlimited7.style.backgroundColor="white"
        unlimited7.style.color="black"
 



        broucherhead.style.color="black"
        basicbrouchure.style.backgroundColor="white"
        standardbrouchure.style.backgroundColor="white"
        unlimitedbrouchure.style.backgroundColor="white"
        basicbrouchure.style.color="black"
        standardbrouchure.style.color="black"
        unlimitedbrouchure.style.color="black"


        brouchurebasic1.style.backgroundColor="white"
        brouchurebasic1.style.color="black"
        brouchurebasic2.style.backgroundColor="white"
        brouchurebasic2.style.color="black"
        brouchurebasic3.style.backgroundColor="white"
        brouchurebasic3.style.color="black"
        brouchurebasic4.style.backgroundColor="white"
        brouchurebasic4.style.color="black"
  
        brouchurebasic5.style.backgroundColor="white"
        brouchurebasic5.style.color="black"
  



        brouchurestandard1.style.backgroundColor="white"
        brouchurestandard1.style.color="black"
        brouchurestandard2.style.backgroundColor="white"
        brouchurestandard2.style.color="black"
        brouchurestandard3.style.backgroundColor="white"
        brouchurestandard3.style.color="black"
        brouchurestandard4.style.backgroundColor="white"
        brouchurestandard4.style.color="black"
        
        brouchurestandard5.style.backgroundColor="white"
        brouchurestandard5.style.color="black"
        



        unlimitedbrouchure1.style.backgroundColor="white"
        unlimitedbrouchure1.style.color="black"
        unlimitedbrouchure2.style.backgroundColor="white"
        unlimitedbrouchure2.style.color="black"
        unlimitedbrouchure3.style.backgroundColor="white"
        unlimitedbrouchure3.style.color="black"
        unlimitedbrouchure4.style.backgroundColor="white"
        unlimitedbrouchure4.style.color="black"
        unlimitedbrouchure5.style.backgroundColor="white"
        unlimitedbrouchure5.style.color="black"
        
        // business card
        bcardhead.style.color="black"

        singlehead.style.backgroundColor="white"
        doublehead.style.backgroundColor="white"
        doublecorporate.style.backgroundColor="white"
        singlehead.style.color="black"
        doublehead.style.color="black"
        doublecorporate.style.color="black"


        singlecard1.style.backgroundColor="white"
        singlecard1.style.color="black"
        singlecard2.style.backgroundColor="white"
        singlecard2.style.color="black"
        singlecard3.style.backgroundColor="white"
        singlecard3.style.color="black"
        singlecard4.style.backgroundColor="white"
        singlecard4.style.color="black"
        singlecard5.style.backgroundColor="white"
        singlecard5.style.color="black"
        singlecard6.style.backgroundColor="white"
        singlecard6.style.color="black"
        singlecard7.style.backgroundColor="white"
        singlecard7.style.color="black"
        singlecard8.style.backgroundColor="white"
        singlecard8.style.color="black"
  



        doublecard1.style.backgroundColor="white"
        doublecard1.style.color="black"
        doublecard2.style.backgroundColor="white"
        doublecard2.style.color="black"
        doublecard3.style.backgroundColor="white"
        doublecard3.style.color="black"
        doublecard4.style.backgroundColor="white"
        doublecard4.style.color="black"
        doublecard5.style.backgroundColor="white"
        doublecard5.style.color="black"
        doublecard6.style.backgroundColor="white"
        doublecard6.style.color="black"
        doublecard7.style.backgroundColor="white"
        doublecard7.style.color="black"
        doublecard8.style.backgroundColor="white"
        doublecard8.style.color="black"
        



        doublecorcard1.style.backgroundColor="white"
        doublecorcard1.style.color="black"
        doublecorcard2.style.backgroundColor="white"
        doublecorcard2.style.color="black"
        doublecorcard3.style.backgroundColor="white"
        doublecorcard3.style.color="black"
        doublecorcard4.style.backgroundColor="white"
        doublecorcard4.style.color="black"
        doublecorcard5.style.backgroundColor="white"
        doublecorcard5.style.color="black"
        doublecorcard6.style.backgroundColor="white"
        doublecorcard6.style.color="black"
        doublecorcard7.style.backgroundColor="white"
        doublecorcard7.style.color="black"
        doublecorcard8.style.backgroundColor="white"
        doublecorcard8.style.color="black"
        



        
        
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
        gdesignhead.style.color="white"
        logoweb.style.color="white"
        basiclogo.style.backgroundColor="rgb(20,20,20)"
        standardlogo.style.backgroundColor="rgb(20,20,20)"
        unlimitedlogo.style.backgroundColor="rgb(20,20,20)"
        basiclogo.style.color="white"
        standardlogo.style.color="white"
        unlimitedlogo.style.color="white"


        basic1.style.backgroundColor="rgb(20,20,20)"
        basic1.style.color="white"
        basic2.style.backgroundColor="rgb(20,20,20)"
        basic2.style.color="white"
        basic3.style.backgroundColor="rgb(20,20,20)"
        basic3.style.color="white"
        basic4.style.backgroundColor="rgb(20,20,20)"
        basic4.style.color="white"
        basic5.style.backgroundColor="rgb(20,20,20)"
        basic5.style.color="white"
        basic6.style.backgroundColor="rgb(20,20,20)"
        basic6.style.color="white"
        basic7.style.backgroundColor="rgb(20,20,20)"
        basic7.style.color="white"
        basic8.style.backgroundColor="rgb(20,20,20)"
        basic8.style.color="white"




        standard1.style.backgroundColor="rgb(20,20,20)"
        standard1.style.color="white"
        standard2.style.backgroundColor="rgb(20,20,20)"
        standard2.style.color="white"
        standard3.style.backgroundColor="rgb(20,20,20)"
        standard3.style.color="white"
        standard4.style.backgroundColor="rgb(20,20,20)"
        standard4.style.color="white"
        standard5.style.backgroundColor="rgb(20,20,20)"
        standard5.style.color="white"
        standard6.style.backgroundColor="rgb(20,20,20)"
        standard6.style.color="white"
     


        unlimited1.style.backgroundColor="rgb(20,20,20)"
        unlimited1.style.color="white"
        unlimited2.style.backgroundColor="rgb(20,20,20)"
        unlimited2.style.color="white"
        unlimited3.style.backgroundColor="rgb(20,20,20)"
        unlimited3.style.color="white"
        unlimited4.style.backgroundColor="rgb(20,20,20)"
        unlimited4.style.color="white"
        unlimited5.style.backgroundColor="rgb(20,20,20)"
        unlimited5.style.color="white"
        unlimited6.style.backgroundColor="rgb(20,20,20)"
        unlimited6.style.color="white"
        unlimited7.style.backgroundColor="rgb(20,20,20)"
        unlimited7.style.color="white"
 



        broucherhead.style.color="white"
        basicbrouchure.style.backgroundColor="rgb(20,20,20)"
        standardbrouchure.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure.style.backgroundColor="rgb(20,20,20)"
        basicbrouchure.style.color="white"
        standardbrouchure.style.color="white"
        unlimitedbrouchure.style.color="white"


        brouchurebasic1.style.backgroundColor="rgb(20,20,20)"
        brouchurebasic1.style.color="white"
        brouchurebasic2.style.backgroundColor="rgb(20,20,20)"
        brouchurebasic2.style.color="white"
        brouchurebasic3.style.backgroundColor="rgb(20,20,20)"
        brouchurebasic3.style.color="white"
        brouchurebasic4.style.backgroundColor="rgb(20,20,20)"
        brouchurebasic4.style.color="white"
        brouchurebasic5.style.backgroundColor="rgb(20,20,20)"
        brouchurebasic5.style.color="white"
  



        brouchurestandard1.style.backgroundColor="rgb(20,20,20)"
        brouchurestandard1.style.color="white"
        brouchurestandard2.style.backgroundColor="rgb(20,20,20)"
        brouchurestandard2.style.color="white"
        brouchurestandard3.style.backgroundColor="rgb(20,20,20)"
        brouchurestandard3.style.color="white"
        brouchurestandard4.style.backgroundColor="rgb(20,20,20)"
        brouchurestandard4.style.color="white"
        brouchurestandard5.style.backgroundColor="rgb(20,20,20)"
        brouchurestandard5.style.color="white"
        



        unlimitedbrouchure1.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure1.style.color="white"
        unlimitedbrouchure2.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure2.style.color="white"
        unlimitedbrouchure3.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure3.style.color="white"
        unlimitedbrouchure4.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure4.style.color="white"
        unlimitedbrouchure5.style.backgroundColor="rgb(20,20,20)"
        unlimitedbrouchure5.style.color="white"
        
        // business card
        bcardhead.style.color="white"

        singlehead.style.backgroundColor="rgb(20,20,20)"
        doublehead.style.backgroundColor="rgb(20,20,20)"
        doublecorporate.style.backgroundColor="rgb(20,20,20)"
        singlehead.style.color="white"
        doublehead.style.color="white"
        doublecorporate.style.color="white"


        singlecard1.style.backgroundColor="rgb(20,20,20)"
        singlecard1.style.color="white"
        singlecard2.style.backgroundColor="rgb(20,20,20)"
        singlecard2.style.color="white"
        singlecard3.style.backgroundColor="rgb(20,20,20)"
        singlecard3.style.color="white"
        singlecard4.style.backgroundColor="rgb(20,20,20)"
        singlecard4.style.color="white"
        singlecard5.style.backgroundColor="rgb(20,20,20)"
        singlecard5.style.color="white"
        singlecard6.style.backgroundColor="rgb(20,20,20)"
        singlecard6.style.color="white"
        singlecard7.style.backgroundColor="rgb(20,20,20)"
        singlecard7.style.color="white"
        singlecard8.style.backgroundColor="rgb(20,20,20)"
        singlecard8.style.color="white"
  



        doublecard1.style.backgroundColor="rgb(20,20,20)"
        doublecard1.style.color="white"
        doublecard2.style.backgroundColor="rgb(20,20,20)"
        doublecard2.style.color="white"
        doublecard3.style.backgroundColor="rgb(20,20,20)"
        doublecard3.style.color="white"
        doublecard4.style.backgroundColor="rgb(20,20,20)"
        doublecard4.style.color="white"
        doublecard5.style.backgroundColor="rgb(20,20,20)"
        doublecard5.style.color="white"
        doublecard6.style.backgroundColor="rgb(20,20,20)"
        doublecard6.style.color="white"
        doublecard7.style.backgroundColor="rgb(20,20,20)"
        doublecard7.style.color="white"
        doublecard8.style.backgroundColor="rgb(20,20,20)"
        doublecard8.style.color="white"
        



        doublecorcard1.style.backgroundColor="rgb(20,20,20)"
        doublecorcard1.style.color="white"
        doublecorcard2.style.backgroundColor="rgb(20,20,20)"
        doublecorcard2.style.color="white"
        doublecorcard3.style.backgroundColor="rgb(20,20,20)"
        doublecorcard3.style.color="white"
        doublecorcard4.style.backgroundColor="rgb(20,20,20)"
        doublecorcard4.style.color="white"
        doublecorcard5.style.backgroundColor="rgb(20,20,20)"
        doublecorcard5.style.color="white"
        doublecorcard6.style.backgroundColor="rgb(20,20,20)"
        doublecorcard6.style.color="white"
        doublecorcard7.style.backgroundColor="rgb(20,20,20)"
        doublecorcard7.style.color="white"
        doublecorcard8.style.backgroundColor="rgb(20,20,20)"
        doublecorcard8.style.color="white"
        

}
}
});