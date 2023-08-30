let classData = [
    {
      name: 'Ram',
      id: '12A',
      marks: 56,
      class: 12,
    },
    {
      name: 'Ramesh',
      id: '12B',
      marks: 67,
      class: 12,
    },
    {
      name: 'Hari',
      id: '12C',
      marks: 78,
      class: 12,
    },
    {
      name: 'John',
      id: '12D',
      marks: 45,
      class: 12,
    },
    {
      name: 'Mohammad',
      id: '12E',
      marks: 57,
      class: 11,
    },
  ];

let button = document.getElementById("btn1")
let para=document.getElementById("show")
button.addEventListener("click",getDetails)


function getDetails(){
    para.innerHTML=`<h3>Loading....</h3>`
    let details=" ";
    let className="default";
    setTimeout(()=>{
        classData.forEach(data=>{
            if(data.marks>=60){
                className="high"
            }
        else{
                className="low"
            }
           details=details+`<div class=${className}>
           Name:${data.name}<br>
           ID : ${data.id}<br>
           Marks:${data.marks}<br>
           Class:${data.class}
           </div>`
           para.innerHTML=details
         })
    },5000)
}