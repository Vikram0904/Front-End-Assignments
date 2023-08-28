
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<img src="../Images/book5.jpeg"></img>`;


let p=document.getElementById('sign');
p.innerHTML=`<pre>BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events nearby.
Also features promotional offers, coupons and mobile app.

If You Buy A Ticket From BookMyShowcFirst You Must Sign In The Network 
Then You Can Buy A Ticket From BookMyShow.
</pre>`;

let button=document.getElementById("btn1");
let bookDiv = document.getElementById("book");

function signIn(){
alert('Welcome To Book My Show');
let details = `<p>Name:</p>
<input type="text" placeholder="username" name="Username" id="name" > <br>
<p>Password:</p>
<input type="password" placeholder="password" name="password" id="name" > <br>
<p>Account Number:</p>
<input type="text" placeholder="a/c number" name="a/c number" id="name" > <br><br>
<button type="submit">Login</button>
<button type="button">Cancel</button> `;
bookDiv.innerHTML=details;
}
button.addEventListener("click",signIn)


let button1=document.getElementById("btn2");
let book2Div = document.getElementById("book2");

function bookTicket()
{
    alert('Only SignIn People Can Book Ticket');
    let display= `<div id="ticket">
    <img src="../Images/book1.jpeg height=150px width=50px></img>
    <img src="../Images/book2.jpeg height=150px width=50px></img> 
    <img src="../Images/book3.jpeg height=150px width=50px></img>
    <img src="../Images/book4.jpeg height=150px width=50px></img> </div>
    <button type="submit">Login</button>
    <button type="button">Cancel</button> `;
    book2Div.innerHTML= display;
}
button1.addEventListener("click",bookTicket)