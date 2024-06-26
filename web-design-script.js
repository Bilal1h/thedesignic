
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
const webhead = document.getElementById("webhead")


const standardweb = document.getElementById("standardweb")

const simpleweb = document.getElementById("simpleweb")
const wordpressweb = document.getElementById("wordpressweb")
const corporateweb = document.getElementById("corporateweb")




const simple1 = document.getElementById("simple1")
const simple2 = document.getElementById("simple2")
const simple3 = document.getElementById("simple3")
const simple4 = document.getElementById("simple4")
const simple5 = document.getElementById("simple5")
const simple6 = document.getElementById("simple6")
const simple7 = document.getElementById("simple7")
const simple8 = document.getElementById("simple8")
const simple9 = document.getElementById("simple9")



const wordpress1 = document.getElementById("wordpress1")
const wordpress2 = document.getElementById("wordpress2")
const wordpress3 = document.getElementById("wordpress3")
const wordpress4 = document.getElementById("wordpress4")
const wordpress5 = document.getElementById("wordpress5")
const wordpress6 = document.getElementById("wordpress6")
const wordpress7 = document.getElementById("wordpress7")
const wordpress8 = document.getElementById("wordpress8")
const wordpress9 = document.getElementById("wordpress9")
const wordpress10 = document.getElementById("wordpress10")
const wordpress11 = document.getElementById("wordpress11")



const corporate1 = document.getElementById("corporate1")
const corporate2 = document.getElementById("corporate2")
const corporate3 = document.getElementById("corporate3")
const corporate4 = document.getElementById("corporate4")
const corporate5 = document.getElementById("corporate5")
const corporate6 = document.getElementById("corporate6")
const corporate7 = document.getElementById("corporate7")
const corporate8 = document.getElementById("corporate8")
const corporate9 = document.getElementById("corporate9")
const corporate10 = document.getElementById("corporate10")
const corporate11 = document.getElementById("corporate11")

// premium web start
const premiumweb = document.getElementById("premiumweb")

const businessweb = document.getElementById("businessweb")
const bestsellerweb = document.getElementById("bestsellerweb")
const ecommerceweb = document.getElementById("ecommerceweb")




const business1 = document.getElementById("business1")
const business2 = document.getElementById("business2")
const business3 = document.getElementById("business3")
const business4 = document.getElementById("business4")
const business5 = document.getElementById("business5")
const business6 = document.getElementById("business6")
const business7 = document.getElementById("business7")
const business8 = document.getElementById("business8")
const business9 = document.getElementById("business9")
const business10 = document.getElementById("business10")



const bestseller1 = document.getElementById("bestseller1")
const bestseller2 = document.getElementById("bestseller2")
const bestseller3 = document.getElementById("bestseller3")
const bestseller4 = document.getElementById("bestseller4")
const bestseller5 = document.getElementById("bestseller5")
const bestseller6 = document.getElementById("bestseller6")
const bestseller7 = document.getElementById("bestseller7")
const bestseller8 = document.getElementById("bestseller8")
const bestseller9 = document.getElementById("bestseller9")
const bestseller10 = document.getElementById("bestseller10")




const ecommerce1 = document.getElementById("ecommerce1")
const ecommerce2 = document.getElementById("ecommerce2")
const ecommerce3 = document.getElementById("ecommerce3")
const ecommerce4 = document.getElementById("ecommerce4")
const ecommerce5 = document.getElementById("ecommerce5")
const ecommerce6 = document.getElementById("ecommerce6")
const ecommerce7 = document.getElementById("ecommerce7")
const ecommerce8 = document.getElementById("ecommerce8")
const ecommerce9 = document.getElementById("ecommerce9")
const ecommerce10 = document.getElementById("ecommerce10")
const ecommerce11 = document.getElementById("ecommerce11")




toggleSwitch.addEventListener('change', switchTheme);

// navbar.style.backgroundColor="black"

navbar.style.backgroundColor = "rgb(200, 200, 200)";

function switchTheme(e) {
    if (e.target.checked) {
        body.style.backgroundColor = "white";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        webhead.style.color="black"
        standardweb.style.color="black"
        simpleweb.style.backgroundColor="white"
        wordpressweb.style.backgroundColor="white"
        corporateweb.style.backgroundColor="white"
        simpleweb.style.color="black"
        wordpressweb.style.color="black"
        corporateweb.style.color="black"


        simple1.style.backgroundColor="white"
        simple1.style.color="black"
        simple2.style.backgroundColor="white"
        simple2.style.color="black"
        simple3.style.backgroundColor="white"
        simple3.style.color="black"
        simple4.style.backgroundColor="white"
        simple4.style.color="black"
        simple5.style.backgroundColor="white"
        simple5.style.color="black"
        simple6.style.backgroundColor="white"
        simple6.style.color="black"
        simple7.style.backgroundColor="white"
        simple7.style.color="black"
        simple8.style.backgroundColor="white"
        simple8.style.color="black"
        simple9.style.backgroundColor="white"
        simple9.style.color="black"



        wordpress1.style.backgroundColor="white"
        wordpress1.style.color="black"
        wordpress2.style.backgroundColor="white"
        wordpress2.style.color="black"
        wordpress3.style.backgroundColor="white"
        wordpress3.style.color="black"
        wordpress4.style.backgroundColor="white"
        wordpress4.style.color="black"
        wordpress5.style.backgroundColor="white"
        wordpress5.style.color="black"
        wordpress6.style.backgroundColor="white"
        wordpress6.style.color="black"
        wordpress7.style.backgroundColor="white"
        wordpress7.style.color="black"
        wordpress8.style.backgroundColor="white"
        wordpress8.style.color="black"
        wordpress9.style.backgroundColor="white"
        wordpress9.style.color="black"
        wordpress10.style.backgroundColor="white"
        wordpress10.style.color="black"
        wordpress11.style.backgroundColor="white"
        wordpress11.style.color="black"


        corporate1.style.backgroundColor="white"
        corporate1.style.color="black"
        corporate2.style.backgroundColor="white"
        corporate2.style.color="black"
        corporate3.style.backgroundColor="white"
        corporate3.style.color="black"
        corporate4.style.backgroundColor="white"
        corporate4.style.color="black"
        corporate5.style.backgroundColor="white"
        corporate5.style.color="black"
        corporate6.style.backgroundColor="white"
        corporate6.style.color="black"
        corporate7.style.backgroundColor="white"
        corporate7.style.color="black"
        corporate8.style.backgroundColor="white"
        corporate8.style.color="black"
        corporate9.style.backgroundColor="white"
        corporate9.style.color="black"
        corporate10.style.backgroundColor="white"
        corporate10.style.color="black"
        corporate11.style.backgroundColor="white"
        corporate11.style.color="black"



        premiumweb.style.color="black"
        businessweb.style.backgroundColor="white"
        bestsellerweb.style.backgroundColor="white"
        ecommerceweb.style.backgroundColor="white"
        businessweb.style.color="black"
        bestsellerweb.style.color="black"
        ecommerceweb.style.color="black"


        business1.style.backgroundColor="white"
        business1.style.color="black"
        business2.style.backgroundColor="white"
        business2.style.color="black"
        business3.style.backgroundColor="white"
        business3.style.color="black"
        business4.style.backgroundColor="white"
        business4.style.color="black"
        business5.style.backgroundColor="white"
        business5.style.color="black"
        business6.style.backgroundColor="white"
        business6.style.color="black"
        business7.style.backgroundColor="white"
        business7.style.color="black"
        business8.style.backgroundColor="white"
        business8.style.color="black"
        business9.style.backgroundColor="white"
        business9.style.color="black"
        business10.style.backgroundColor="white"
        business10.style.color="black"



        bestseller1.style.backgroundColor="white"
        bestseller1.style.color="black"
        bestseller2.style.backgroundColor="white"
        bestseller2.style.color="black"
        bestseller3.style.backgroundColor="white"
        bestseller3.style.color="black"
        bestseller4.style.backgroundColor="white"
        bestseller4.style.color="black"
        bestseller5.style.backgroundColor="white"
        bestseller5.style.color="black"
        bestseller6.style.backgroundColor="white"
        bestseller6.style.color="black"
        bestseller7.style.backgroundColor="white"
        bestseller7.style.color="black"
        bestseller8.style.backgroundColor="white"
        bestseller8.style.color="black"
        bestseller9.style.backgroundColor="white"
        bestseller9.style.color="black"
        bestseller10.style.backgroundColor="white"
        bestseller10.style.color="black"



        ecommerce1.style.backgroundColor="white"
        ecommerce1.style.color="black"
        ecommerce2.style.backgroundColor="white"
        ecommerce2.style.color="black"
        ecommerce3.style.backgroundColor="white"
        ecommerce3.style.color="black"
        ecommerce4.style.backgroundColor="white"
        ecommerce4.style.color="black"
        ecommerce5.style.backgroundColor="white"
        ecommerce5.style.color="black"
        ecommerce6.style.backgroundColor="white"
        ecommerce6.style.color="black"
        ecommerce7.style.backgroundColor="white"
        ecommerce7.style.color="black"
        ecommerce8.style.backgroundColor="white"
        ecommerce8.style.color="black"
        ecommerce9.style.backgroundColor="white"
        ecommerce9.style.color="black"
        ecommerce10.style.backgroundColor="white"
        ecommerce10.style.color="black"
        ecommerce11.style.backgroundColor="white"
        ecommerce11.style.color="black"




        
        
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
        webhead.style.color="white"
        standardweb.style.color="white"

        simpleweb.style.backgroundColor="rgb(20,20,20)"
        wordpressweb.style.backgroundColor="rgb(20,20,20)"
        corporateweb.style.backgroundColor="rgb(20,20,20)"
        simpleweb.style.color="white"
        wordpressweb.style.color="white"
        corporateweb.style.color="white"
        
        simple1.style.backgroundColor="rgb(20,20,20)"
        simple1.style.color="white"
        simple2.style.backgroundColor="rgb(20,20,20)"
        simple2.style.color="white"
        simple3.style.backgroundColor="rgb(20,20,20)"
        simple3.style.color="white"
        simple4.style.backgroundColor="rgb(20,20,20)"
        simple4.style.color="white"
        simple5.style.backgroundColor="rgb(20,20,20)"
        simple5.style.color="white"
        simple6.style.backgroundColor="rgb(20,20,20)"
        simple6.style.color="white"
        simple7.style.backgroundColor="rgb(20,20,20)"
        simple7.style.color="white"
        simple8.style.backgroundColor="rgb(20,20,20)"
        simple8.style.color="white"
        simple9.style.backgroundColor="rgb(20,20,20)"
        simple9.style.color="white"



        wordpress1.style.backgroundColor="rgb(20,20,20)"
        wordpress1.style.color="white"
        wordpress2.style.backgroundColor="rgb(20,20,20)"
        wordpress2.style.color="white"
        wordpress3.style.backgroundColor="rgb(20,20,20)"
        wordpress3.style.color="white"
        wordpress4.style.backgroundColor="rgb(20,20,20)"
        wordpress4.style.color="white"
        wordpress5.style.backgroundColor="rgb(20,20,20)"
        wordpress5.style.color="white"
        wordpress6.style.backgroundColor="rgb(20,20,20)"
        wordpress6.style.color="white"
        wordpress7.style.backgroundColor="rgb(20,20,20)"
        wordpress7.style.color="white"
        wordpress8.style.backgroundColor="rgb(20,20,20)"
        wordpress8.style.color="white"
        wordpress9.style.backgroundColor="rgb(20,20,20)"
        wordpress9.style.color="white"
        wordpress10.style.backgroundColor="rgb(20,20,20)"
        wordpress10.style.color="white"
        wordpress11.style.backgroundColor="rgb(20,20,20)"
        wordpress11.style.color="white"


        corporate1.style.backgroundColor="rgb(20,20,20)"
        corporate1.style.color="white"
        corporate2.style.backgroundColor="rgb(20,20,20)"
        corporate2.style.color="white"
        corporate3.style.backgroundColor="rgb(20,20,20)"
        corporate3.style.color="white"
        corporate4.style.backgroundColor="rgb(20,20,20)"
        corporate4.style.color="white"
        corporate5.style.backgroundColor="rgb(20,20,20)"
        corporate5.style.color="white"
        corporate6.style.backgroundColor="rgb(20,20,20)"
        corporate6.style.color="white"
        corporate7.style.backgroundColor="rgb(20,20,20)"
        corporate7.style.color="white"
        corporate8.style.backgroundColor="rgb(20,20,20)"
        corporate8.style.color="white"
        corporate9.style.backgroundColor="rgb(20,20,20)"
        corporate9.style.color="white"
        corporate10.style.backgroundColor="rgb(20,20,20)"
        corporate10.style.color="white"
        corporate11.style.backgroundColor="rgb(20,20,20)"
        corporate11.style.color="white"
        
        premiumweb.style.color="white"

        businessweb.style.backgroundColor="rgb(20,20,20)"
        bestsellerweb.style.backgroundColor="rgb(20,20,20)"
        ecommerceweb.style.backgroundColor="rgb(20,20,20)"
        businessweb.style.color="white"
        bestsellerweb.style.color="white"
        ecommerceweb.style.color="white"
        
        business1.style.backgroundColor="rgb(20,20,20)"
        business1.style.color="white"
        business2.style.backgroundColor="rgb(20,20,20)"
        business2.style.color="white"
        business3.style.backgroundColor="rgb(20,20,20)"
        business3.style.color="white"
        business4.style.backgroundColor="rgb(20,20,20)"
        business4.style.color="white"
        business5.style.backgroundColor="rgb(20,20,20)"
        business5.style.color="white"
        business6.style.backgroundColor="rgb(20,20,20)"
        business6.style.color="white"
        business7.style.backgroundColor="rgb(20,20,20)"
        business7.style.color="white"
        business8.style.backgroundColor="rgb(20,20,20)"
        business8.style.color="white"
        business9.style.backgroundColor="rgb(20,20,20)"
        business9.style.color="white"
        business10.style.backgroundColor="rgb(20,20,20)"
        business10.style.color="white"



        bestseller1.style.backgroundColor="rgb(20,20,20)"
        bestseller1.style.color="white"
        bestseller2.style.backgroundColor="rgb(20,20,20)"
        bestseller2.style.color="white"
        bestseller3.style.backgroundColor="rgb(20,20,20)"
        bestseller3.style.color="white"
        bestseller4.style.backgroundColor="rgb(20,20,20)"
        bestseller4.style.color="white"
        bestseller5.style.backgroundColor="rgb(20,20,20)"
        bestseller5.style.color="white"
        bestseller6.style.backgroundColor="rgb(20,20,20)"
        bestseller6.style.color="white"
        bestseller7.style.backgroundColor="rgb(20,20,20)"
        bestseller7.style.color="white"
        bestseller8.style.backgroundColor="rgb(20,20,20)"
        bestseller8.style.color="white"
        bestseller9.style.backgroundColor="rgb(20,20,20)"
        bestseller9.style.color="white"
        bestseller10.style.backgroundColor="rgb(20,20,20)"
        bestseller10.style.color="white"



        ecommerce1.style.backgroundColor="rgb(20,20,20)"
        ecommerce1.style.color="white"
        ecommerce2.style.backgroundColor="rgb(20,20,20)"
        ecommerce2.style.color="white"
        ecommerce3.style.backgroundColor="rgb(20,20,20)"
        ecommerce3.style.color="white"
        ecommerce4.style.backgroundColor="rgb(20,20,20)"
        ecommerce4.style.color="white"
        ecommerce5.style.backgroundColor="rgb(20,20,20)"
        ecommerce5.style.color="white"
        ecommerce6.style.backgroundColor="rgb(20,20,20)"
        ecommerce6.style.color="white"
        ecommerce7.style.backgroundColor="rgb(20,20,20)"
        ecommerce7.style.color="white"
        ecommerce8.style.backgroundColor="rgb(20,20,20)"
        ecommerce8.style.color="white"
        ecommerce9.style.backgroundColor="rgb(20,20,20)"
        ecommerce9.style.color="white"
        ecommerce10.style.backgroundColor="rgb(20,20,20)"
        ecommerce10.style.color="white"
        ecommerce11.style.backgroundColor="rgb(20,20,20)"
        ecommerce11.style.color="white"
        
        
}
}
});