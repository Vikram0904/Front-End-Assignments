let array = [2,3,4,5,6,7,8,9,10]
let div=document.getElementById('para')


function oddEven()
{
   
let liHTML=``;
let uiHTML=``;
array.forEach((ele)=>{
    liHTML=liHTML + ((ele%2 === 0) ?`<li id="list1">${ele} is an Even Number</li>`:`<li id="list2">${ele} is an odd Number</li>`)
})
uiHTML= uiHTML + `<ul>${liHTML}</ul>`;
div.innerHTML = uiHTML;
}


