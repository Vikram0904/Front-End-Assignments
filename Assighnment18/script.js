
let p = document.getElementById('alert')
p.innerHTML = "Learn About Java Script"

let button= document.getElementById('button')
let para= document.getElementById('para')
function login()
{
 alert("You Entered The Java script");
  let  display =`<p id="p1">First We Learn How To Access The HTML Element</p>`;
  display=  display + `<p id="p2">Next We Create Three Paragraph </p>`;
 display =   display+ `<p id="p3">Last We Create The Box Assign Into The Center </p>`;
  para.innerHTML = display ;
} 
button.addEventListener('click',login)
