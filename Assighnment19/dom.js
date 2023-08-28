

//DOM --> Document object model --> represents the html file in object format
// It helps to connect the html with JS
// The JS can manipulate the html using the DOM interface
// DOM gives us mutiple methods with which we can change the behaviour and structure of our web page


//Ex-1

// let poojaDiv = document.getElementById('pooja');
// let paraNode = document.createElement('p');
// let spanNode1 = document.createElement('span');
// let spanNode2 = document.createElement('span');
// let paraTextNode = document.createTextNode(' Hey I am a paragraph');
// let spanTextNode1 = document.createTextNode(' I am span 1 ');
// let spanTextNode2 = document.createTextNode(' I am span 2 ');
// paraNode.appendChild(paraTextNode);
// spanNode1.appendChild(spanTextNode1);
// spanNode2.appendChild(spanTextNode2);
// poojaDiv.appendChild(paraNode);
// poojaDiv.appendChild(spanNode1);
// poojaDiv.appendChild(spanNode2);
// paraNode.setAttribute('id', 'myPara');
// paraNode.style.color = 'red';
// let children = poojaDiv.childNodes;

// children.forEach((node) => {
//   node.classList.add('myclass');
// });

// let div = document.getElementById('myUl');
// let liList = div.childNodes;
// liList.forEach((ele) => {
//   if (ele.nodeType === 1) {
//     ele.style.color = 'red';
//   } else if (ele.nodeType === 3) {
//     console.log(ele);
//   }
// });

// let button = document.getElementById('btn');
// button.addEventListener('click', () => {
//   alert(1244);
// });

//Ex-2
// let mainDiv=document.getElementById("div");
// let para=document.createElement("p");
// let para2=document.createElement("p");
// let para3=document.createElement("p");
// let paraText=document.createTextNode("Java Script");
// let paraText2=document.createTextNode("Today We Learn");
// let paraText3=document.createTextNode("Javascript DOM Object");
// para.appendChild(paraText);
// para2.appendChild(paraText2);
// para3.appendChild(paraText3);
// mainDiv.appendChild(para);
// mainDiv.appendChild(para2);
// mainDiv.appendChild(para3);
// para.setAttribute("id","p1")
// para2.setAttribute("id","p2")
// para3.setAttribute("id","p3")
// mainDiv.style.fontSize="40px",mainDiv.style.textAlign="center";
// para.style.color="red",para.style.backgroundColor="skyblue";
// para2.style.color="yellow",para2.style.backgroundColor="skyblue";
// para3.style.color="brown",para3.style.backgroundColor="skyblue";

// // console.log(mainDiv.childNodes)
// // console.log(mainDiv.firstChild)
// // console.log(mainDiv.nodeType)
// // console.log(mainDiv.nodeName)
// let children=mainDiv.childNodes;
// children.forEach((ele)=>{
//     ele.classList.add("hello")
// })

// let secondDiv=document.getElementById("div1")
// secondDiv.style.fontSize="25px"
// let child=secondDiv.childNodes;

// child.forEach((ele)=>{
//     if(ele.nodeName === 'p'){
//         ele.style.color="green";
//       }
//     else{
//     ele.style.color="blue";
//     }
// })



//form Method:
//Ex-1:
// let containerDiv = document.createElement('DIV');
// containerDiv.style.display = 'flex';
// containerDiv.style.height = '100vh';
// containerDiv.style.width = '100vw';
// document.body.appendChild(containerDiv);

// let divClass = document.querySelectorAll('.div-class1');
// divClass.forEach((node, index) => {
//   node.classList.add('div-class11');
//   if (index % 2 === 0) {
//     node.style.backgroundColor = 'red';
//   } else {
//     node.style.backgroundColor = 'blue';
//   }
//   containerDiv.appendChild(node);
// });


//Ex-2;
// Import stylesheets
// let button = document.getElementById('btn');
// button.addEventListener('click', getData);
// function getData() {
//   let inputBox1 = document.getElementById('myTextinput1');
//   let values = inputBox1.value;
//   let valArr = values.split(',');
//   let sum = 0;
//   valArr.forEach((ele) => {
//     sum = sum + parseInt(ele);
//   });
//   document.getElementById('showData').innerHTML=sum;
// }

//Ex-3:
// let button = document.getElementById('btn');
// button.addEventListener('click', getData);
// function getData() {
//   let inputBox1 = document.getElementById('myTextinput1');
//   let inputBox2 = document.getElementById('myTextinput2');
//   inputBox2.disabled = false;
//   document.getElementById('showData').innerHTML = inputBox1.value;
// }

//Ex-1 for radio button:
// let radioBtnList = document.querySelectorAll('input[type=radio]')
// let radioValue = ''

// function getRadioCheckedValue() {
//     radioBtnList.forEach(radio => {
//         if(radio.checked) {
//             radioValue = radio.value
//         }
//     })
    
// }
// function getRadioData() {
//     getRadioCheckedValue()
//     alert(radio)
// }

//Ex-2:
radioBtnList.forEach(radio => {
  radio.addEventListener('click',getRadioData)
})


function getRadioData(e) {
  console.log(e.target.value)
}