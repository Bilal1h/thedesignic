

document.addEventListener("DOMContentLoaded", function() {
    // your code here
const subbut = document.getElementById("subbut");
subbut.addEventListener("click", subsend);


  function subsend() {
      const subemail = document.getElementById("subscribeinput").value;
      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "haiderbilal1h@gmail.com",
      Password : "25597062E921C4F092EE0C4EACFA2DDF896F",
      To : subemail,
      From : "haiderbilal1h@gmail.com",
      Subject : "New subscriber",
      Body : `this one subscribed ${subemail}`
     }).then(
       message => alert("Sent succesfully")
     );}


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
const subscribe = document.getElementById("subscribe")
const faqhead = document.getElementById("faqhead")
const faq1 = document.getElementById("faq1")
const faq1body = document.getElementById("faq1body")
const faq2 = document.getElementById("faq2")
const faq2body = document.getElementById("faq2body")
const faq3 = document.getElementById("faq3")
const faq3body = document.getElementById("faq3body")
const tel = document.getElementById("tel")
const contacthead = document.getElementById("contact-us")
const tellus = document.getElementById("tellus")
const tellusbody = document.getElementById("tellusbody")
const thedesignic = document.getElementById("thedesignicc")
const thedesignicbody = document.getElementById("thedesignicbody")



    

toggleSwitch.addEventListener('change', switchTheme);

// navbar.style.backgroundColor="black"

navbar.style.backgroundColor = "rgb(200, 200, 200)";

function switchTheme(e) {
    if (e.target.checked) {
        body.style.backgroundColor = "white";
        toggleSwitch.style.backgroundColor= "rgb(255, 145, 0)"
        subscribe.style.color="black"
        faqhead.style.color="black"
        faq1.style.backgroundColor="white"
        faq1.style.color="black"
        faq1body.style.backgroundColor="white"
        faq1body.style.color="rgb(119,119,119)"

        faq2.style.backgroundColor="white"
        faq2.style.color="black"
        faq2body.style.backgroundColor="white"
        faq2body.style.color="rgb(119,119,119)"

        faq3.style.backgroundColor="white"
        faq3.style.color="black"
        faq3body.style.backgroundColor="white"
        faq3body.style.color="rgb(119,119,119)"
        tel.style.color="rgb(255,145,0)"
        contacthead.style.color="black"
        tellus.style.color="black"
        tellusbody.style.color="black"
        thedesignic.style.color="black"
        thedesignicbody.style.color="black"


    } else {
        body.style.backgroundColor = "black";
        toggleSwitch.style.backgroundColor= "#1976d2"
        subscribe.style.color="white"
        faqhead.style.color="white"
        
        navlinks1.style.color = "white";
        navlinks2.style.color = "white";
        navlinks3.style.color = "white";
        navlinks4.style.color = "white";
        navlinks5.style.color = "white";
        navlinks6.style.color = "black";
        navlinks7.style.color = "black";
        thedesign.style.color="white";
        faq1.style.backgroundColor="black"
        faq1.style.color="rgb(255,145,0)"
        faq1body.style.backgroundColor="black"
        faq1body.style.color="rgb(119,119,119)"
        
        faq2.style.backgroundColor="black"
        faq2.style.color="rgb(255,145,0)"
        faq2body.style.backgroundColor="black"
        faq2body.style.color="rgb(119,119,119)"
        
        faq3.style.backgroundColor="black"
        faq3.style.color="rgb(255,145,0)"
        faq3body.style.backgroundColor="black"
        faq3body.style.color="rgb(119,119,119)"
        tel.style.color="rgb(255,145,0)"
        contacthead.style.color="white"
        tellus.style.color="white"
        tellusbody.style.color="rgb(119,119,119)"
        thedesignic.style.color="white"
        thedesignicbody.style.color="rgb(119,119,119)"
        
        
        
        
}
}
});