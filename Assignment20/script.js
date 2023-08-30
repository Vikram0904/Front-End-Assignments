
let tableObj = [{
  name : 'Anuradha',
  class : 'FE',
  roll :' 12345',
  area :'Marathalli',
  marks: '80',
  interest : 'JS'
},
               {
  name : 'Manoj',
  class : 'FE',
  roll :' 134876',
  area :'Bellandur',
  marks: '80.3',
  interest : 'CSS'
},
               {
  name : 'Suresh',
  class : 'BE',
  roll :' 12345',
  area :'Brookfield',
  marks: '75',
  interest : 'HTML'
},
               {
  name : 'vigesh',
  class : 'FE',
  roll :' 34567',
  area :'whitefield',
  marks: '23',
  interest : 'JS'
},
               {
  name : 'sathish',
  class : 'FE',
  roll :' 345678',
  area :'kundalahalli',
  marks: '55.3',
  interest : 'CSS'
},
               {
  name : 'vikram',
  class : 'BE',
  roll :' 2345',
  area :'sidhapura',
  marks: '90',
  interest : 'HTML'
},
               {
  name : 'lavanya',
  class : 'FE',
  roll :' 87654',
  area :'silkboard',
  marks: '77',
  interest : 'JS'
},
               {
  name : 'pooja',
  class : 'FE',
  roll :' 657575',
  area :'varthur',
  marks: '83',
  interest : 'CSS'
},
               {
  name : 'komalatha',
  class : 'BE',
  roll :' 56437',
  area :'itpl',
  marks: '65',
  interest : 'HTML'
},
{
  name : 'monish',
  class : 'FE',
  roll :' 5432346',
  area :'majestic',
  marks: '44',
  interest:'JAVA'
}]

//First Method

  let div1 = document.getElementById("table")

function createTable(){
  let tr=``;
  let th=``;
  tableObj.forEach( (tData,index)=>{
let idName="default";
let className="default"

if(tData.marks <= '99'){
if(tData.marks >='80'){
  className="Top";
  }
else if(tData.marks >='60' && tData.marks <'80'){
    className="Average"
  }
  else {
    className="Lower"
  } 
}

if(tData.interest === 'JS'){
  idName="js"  }
else if(tData.interest === 'CSS'){
idName="css"  }
else if(tData.interest === 'HTML'){
idName="html"  }
else {
  idName="any"
}

tr = tr +`<tr><td>${tData.name.toUpperCase()}</td><td>${tData.class}</td><td>${tData.roll}</td><td>${tData.area.toUpperCase()}</td><td class=${className}>${tData.marks}</td><td id=${idName}>${tData.interest}</td></tr>`
  })
th = "<tr><th>Name</th><th>Class</th><th>Roll</th><th>Area</th><th>Marks</th><th>Interest</th></tr>"

  let table =`<table>${th.toUpperCase()}${tr}</table>`
div1.innerHTML=table;
}
createTable()


//Second Method

// let div = document.getElementById("table")
// let tableRow=``;
// let table=``;
// let tableHeading;
// tableObj.forEach((ele,index)=>{
//   let tableData=``;
// tableHeading=Object.keys(ele);
// Object.keys(ele).forEach((key,ind)=>{
//   let idName="default";
  
//   if(key=='marks')
//   {
//     if(parseInt(tableObj[index][key]) >=80){
//       idName="Topper";
//   } 
//   else if((parseInt(tableObj[index][key]) >=60) && (parseInt(tableObj[index][key])<80)){
//     idName="Average";
//   }  
//   else{
//     idName="Lower";
//   }
//   }
//   else if(key=='interest')
//   {
//     if(tableObj[index][key] == 'JS'){
//       idName="js";
//   } 
//   else if(tableObj[index][key] == 'CSS'){
//     idName="css";
//   }  
//   else if(tableObj[index][key]== 'HTML'){
//     idName="html";
//   } 
// else{
//     idName="any";
//   }
//   }
//   let string=tableObj[index][key].charAt(0).toUpperCase()
//   string=string+tableObj[index][key].substring(1)
//   tableData= tableData+`<td id=${idName}>${string}</td>`
// });
// tableRow= tableRow+`<tr>${tableData}</tr>`
// });
// let tableHead=``;
// tableHeading.forEach((ele)=>{
//     tableHead=tableHead+`<th>${ele.toUpperCase()}</th>`
// })

// table=`<table><tr>${tableHead}</tr>${tableRow}</table>`
// console.log(table)

// div.innerHTML = table;

// Second Question

// Import stylesheets
//import './style.css';

// let tableData = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496',
//       },
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets',
//     },
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618',
//       },
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains',
//     },
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653',
//       },
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications',
//     },
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990',
//       },
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services',
//     },
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342',
//       },
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems',
//     },
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-71.4197',
//         lng: '71.7478',
//       },
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications',
//     },
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984',
//       },
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers',
//     },
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {
//         lat: '-14.3990',
//         lng: '-120.7677',
//       },
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers',
//     },
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889',
//       },
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies',
//     },
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232',
//       },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models',
//     },
//   },
// ];

// let div = document.getElementById('table');
// function genrateTable() {
//   let tr = ``;
//   let th = ``;
//   tableData.forEach((tdata, index) => {
//     if (index === 0) {
//       th = `<tr>
//       <th>ID</th>
//       <th>User Name</th>
//       <th>Email Id</th>
//       <th>Phone</th>
//       <th>Name</th>
//       <th>Website</th>
//     </tr>`;
//       tr =
//         tr +
//         th +
//         `<tr><td>${tdata.id}</td><td>${tdata.username}</td><td>${tdata.email}</td><td>${tdata.phone}</td><td>${tdata.name}</td><td>${tdata.website}</td></tr>`;
//     } else {
//       tr =
//         tr +
//         `<tr><td>${tdata.id}</td><td>${tdata.username}</td><td>${tdata.email}</td><td>${tdata.phone}</td><td>${tdata.name}</td><td>${tdata.website}</td></tr>`;
//     }
//   });

//   let table = `<table>${tr}</table>`;
//   div.innerHTML = table;
// }

// genrateTable();


