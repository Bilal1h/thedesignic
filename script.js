
document.addEventListener("DOMContentLoaded", function() {
    // your code here

  


const checkbox = document.getElementById("radiobtn1");
checkbox.addEventListener("change", toggleNavbarStyle);
    
function toggleNavbarStyle() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("white");
  }

const toggleSwitch = document.querySelector('#radiobtn1');
const body = document.querySelector('#body');
const navbar = document.getElementById("navbar");
const navlinks1 = document.getElementById("nav-linkss1");
const navlinks2 = document.getElementById("nav-linkss2");
const navlinks3 = document.getElementById("nav-linkss3");
const navlinks4 = document.getElementById("nav-linkss4");
const navlinks5 = document.getElementById("nav-linkss5");
const navlinks6 = document.getElementById("nav-linkss6");
const navlinks7 = document.getElementById("nav-linkss7");
const thedesign = document.getElementById("thedesignic")


const boxcard = document.getElementById("box-card")
const boxcard2 = document.getElementById("box-card2")
const boxcard3 = document.getElementById("box-card3")
const boxcard4 = document.getElementById("box-card4")
const boxcard5 = document.getElementById("box-card5")
const boxcard6 = document.getElementById("box-card6")

const test1 = document.getElementById("test1-des")
const test2 = document.getElementById("test2-des")
const test3 = document.getElementById("test3-des")
const test4 = document.getElementById("test4-des")
const test5 = document.getElementById("test5-des")
const test6 = document.getElementById("test6-des")

const test1name = document.getElementById("test-1name")

const overlay = document.getElementById("overlays")
const overlay2 = document.getElementById("overlays2")
const overlay3 = document.getElementById("overlays3")

const test1date = document.getElementById("test1-date")
const test2date = document.getElementById("test2-date")
const test3date = document.getElementById("test3-date")
const test4date = document.getElementById("test4-date")
const test5date = document.getElementById("test5-date")
const test6date = document.getElementById("test6-date")
const whtclientsay = document.getElementById("testimonials")

const letscreate = document.getElementById("letscreate")
const letscreatepara = document.getElementById("create-para")

const creativity = document.getElementById("creativity")
const creativitypara = document.getElementById("creativity-para")

const modern = document.getElementById("modern")
const modernpara = document.getElementById("modern-para")

const main_after_car = document.getElementById("after-car-sec")

const branding = document.getElementById("branding")
const graphic = document.getElementById("graphic")
const web = document.getElementById("web")
const brandingpara = document.getElementById("brandinpara")
const graphicpara = document.getElementById("graphicpara")
const webpara = document.getElementById("webpara")
const recent = document.getElementById("recent")

const cardText = document.querySelectorAll(".card-text")


toggleSwitch.addEventListener('change', switchTheme);

cardText.forEach((e)=>{
    e.style.color="black";
});



function switchTheme(e) {
    if (e.target.checked) {
        body.style.backgroundColor = "white";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        overlay.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        overlay2.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        overlay3.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        letscreate.style.color="black"
        letscreatepara.style.color="black"
        creativity.style.color="black"
        creativitypara.style.color="black"
        modern.style.color="black"
        modernpara.style.color="black"
        main_after_car.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        main_after_car.style.color="black"
        branding.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        graphic.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        web.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        brandingpara.style.color="black"
        graphicpara.style.color="black"
        webpara.style.color="black"
        recent.style.color="black"
        
       
        
        boxcard.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard2.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard2.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        
        
        test1.style.color="black";
        test2.style.color="black";
        test1date.style.color="black";
        test2date.style.color="black";
        
        boxcard3.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard3.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard4.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard4.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";


        test3.style.color="black";
        test4.style.color="black";
        test3date.style.color="black";
        test4date.style.color="black";
        
        boxcard5.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard5.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard6.style.backgroundColor = "rgba(255,255,255,1)";
        boxcard6.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        console.log("checked")
        test5.style.color="black";
        test6.style.color="black";
        test5date.style.color="black";
        test6date.style.color="black";
        
        
        whtclientsay.style.color = "rgb(0,0,0)"



        cardText.forEach((e)=>{
            e.style.color="black";
        });
    } else {
        body.style.backgroundColor = "black";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        overlay.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        overlay2.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        overlay3.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        letscreate.style.color="black"
        letscreatepara.style.color="black"
        creativity.style.color="black"
        creativitypara.style.color="black"
        modern.style.color="black"
        modernpara.style.color="black"
        main_after_car.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        main_after_car.style.color="black"
        branding.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        graphic.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        web.style.backgroundColor="rgba(255, 255, 255, 0.7)"
        brandingpara.style.color="black"
        graphicpara.style.color="black"
        webpara.style.color="black"
        recent.style.color="black"
        
       
        
        boxcard.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard2.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard2.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        
        
        test1.style.color="black";
        test2.style.color="black";
        test1date.style.color="black";
        test2date.style.color="black";
        
        boxcard3.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard3.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard4.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard4.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";


        test3.style.color="black";
        test4.style.color="black";
        test3date.style.color="black";
        test4date.style.color="black";
        
        boxcard5.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard5.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        boxcard6.style.backgroundColor = "rgba(0,0,0,1)";
        boxcard6.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.8) !important";
        console.log("checked")
        test5.style.color="black";
        test6.style.color="black";
        test5date.style.color="black";
        test6date.style.color="black";
        

        cardText.forEach((e)=>{
            e.style.color="white";
        });
        
        whtclientsay.style.color = "rgb(0,0,0)"
        
}
}
});