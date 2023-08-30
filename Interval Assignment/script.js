
//Method----1

// let div = document.getElementById("set")
// let button1 = document.getElementById("bt1")
// let idName="default";
// let i=20;
// function start(){
// let interval=setInterval(()=>{
//     div.innerHTML=`<div id=${idName}>${i}</div>`;
//     if(11<i){
//         idName="black"
//     }
//     else if(7<i && i<=11){
//         idName="green"
//     }
//     else if(i<7){
//         idName="red"
//     }
//     i--;
// },1000)
// setTimeout(()=>{
// clearInterval(interval);
// i=20
// },21000)
// }


//Method----2
let div = document.getElementById("set")
let button1 = document.getElementById("bt1")

let i=20;
function start(){
    button1.style.display="none"
    let interval=setInterval(()=>{
        div.innerHTML=i;
        i--; 
        if(11<i){
            div.style.color="brown"
            div.style.fontSize="70px"
        }
        if(7<i && i<=9){
            div.style.color="green"
            div.style.fontSize="100px"        
        }
        if(i<5){
            div.style.color="red"
            div.style.fontSize="130px"        
        }  
        if(i===0){
            clearInterval(interval);
            button1.style.display="block"
            button1.style.marginLeft="47%"
            button1.style.marginTop="50px"
            i=20;
        }
        
        },1000)
}
