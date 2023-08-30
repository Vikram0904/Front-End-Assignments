// //Call The Object

// let object = {
//   name : 'Mahesh',
//   eats : 'Butter Naan',
//   list :['Pizza' ,'Naan' , 'Biryani', 'Panner','Chicken tikkan'],
//   getFood : function () {
//   this.list.forEach(ele => {
//     if(ele ==='Pizza') {
//       console.log(ele + 'Mahesh does not like it');
//     } else {
//       console.log(ele + 'Mahesh likes');
//     }
//   })
// },
//   class :{
//     className :' Front end',
//     institution : 'Besant'
//   }
// }
// console.log(object.class.institution);
// object.getFood()

// //Call The Nested Object

// let vikramObj = {
//   name : 'Vikram',
//   class: {
//     className : 'Besant',
//       discipline :{
//         disciplineName :'Front end',
//          subject : {
//            subjectName : 'Computer Science',
//              area : {
//                areaName : 'Marathalli'
//              }
//          }
//       }
//   }
// }

// console.log(vikramObj.class.discipline.subject.area.areaName)
// console.log(vikramObj.name)
// let val = vikramObj
// val.name = 'Manoj'
// console.log(vikramObj)
// console.log(val)

// //Call The Key Name Use Object Keys
// let satishObj = {
//   name : 'Satish',
//   age: 21,
//   class : 'FE',
//   data : 'ABCD'
// }

// console.log(satishObj['name'])
// console.log(Object.keys(satishObj))

// Object.keys(satishObj).forEach(ele => {
//   console.log( ele + ' ===> ' + satishObj[ele])
// })

// //Prototypal Inheritance
//Ex-1:
// let GP = {
//   name : 'Abhishek',
//   class:12,
//   getDeatils : function() {
//     console.log('Hello this is ' + this.name  + ' and class is' + this.class)
//   }
// }
// console.log(GP)
// console.log(GP.name)
// console.log(GP.hasOwnProperty('class'))
// console.log(GP.hasOwnProperty('class1'))

//Ex-2:
// let GP = {
//   name : 'Abhishek',
//   class:12,
//   getDetails : function() {
//     console.log('Hello this is ' + this.name  + ' and class is ' + this.class)
//   }
// }
// let P = {
//   name:'Abhishek Mojumdar',
//   class:'FE',
//   __proto__ : GP
// }

// let C = {
//   name : 'Mowgli',
//   __proto__:P
// }
// C. getDetails ()z


//Ex-3:
//Null does Not Have a prototype
// let abhiAdmin = {
//   name : 'Abhishek',
//   class:'12',
//   getDetails: function () {
//   console.log('the name is '+this.name + ' the class is ' + this.class)
// },
//   getSum(param,operation=null) {
//     console.log(20+92+param)
//     if(this.operation) {
//       console.log(this.operation)
//     } else {
//       console.log(operation)
//     }
//   }
// }

// let abhiEmp = {
//   name:'Abhishek Mojumdar',
//   class:'FE',
//   operation:'MUL'
// }

// console.log(Object.getPrototypeOf(abhiEmp))
//  abhiAdmin.getSum.apply(abhiEmp,[3,'Sum'])

// Ex-4
// let myObj = {
//   name : 'Abhishek',
//   org:'Pure',
//   sal:'1500',
//   getDetails : function (val ) {
//     console.log('Hi my name is '+this.name + ' I am working at ' + this.org)
//   }
// }

// let myObj1 = {
//   name : 'Anirudh',
//   music:true,
//    __proto__:myObj
// }


// myObj1.getDetails()

//Prototype Inheritance Use In Arrray:
//typeof array is an object so we use prototype in array

// let arr = [234,54,21,3,4,1,2]
// arr.name = "vikram"
// arr.myFn = function() {
//   for(let i = 0 ; i< this.length ;i++) {
//     console.log(this[i]*2)

//   }
// }
// console.log(arr)
// arr.myFn()

//Call() function in Object
//Ex-1

// let myObj = {
//   name : 'Abhishek',
//   org:'Pure',
//   sal:'1500',
//   getDetails : function (val ) {
//     console.log('Hi my name is '+this.name + ' I am working at ' + this.org + ' in '+ val +' position')
//   }
// }

// let myObj1 = {
//   name : 'Anirudh',
//   music:true,
//   org:'secure value',
// }
// myObj.getDetails.call(myObj1,"executive")

//Ex-2

// let myObj = {
//   name : 'Abhishek',
//   org:'Pure',
//   sal:'1500',
//   getDetails : function (val , data ) {
//     let org
//     if (!this.org) {
//       org = val
//     } else {
//       org = this.org
//     } 
//     let num = data
//     console.log('Hi my name is '+this.name + ' My org is ' + org  + ' the data is ' + num)
//   }
// }

// let myObj1 = {
//   name : 'Anirudh',
//   org:'Dell',
//   music:true,
// }
// myObj.getDetails.call(myObj1, 'Amazon' , 90)

  //apply() function in Object

  //Ex-1:

  // let myObj = {
  //   name : 'Abhishek',
  //   org:'Pure',
  //   sal:'1500',
  //   getDetails : function (val,exp) {
  //     console.log('Hi my name is '+this.name + ' I am working at ' + this.org + ' in '+ val +' position'+ ' in past '+ exp + ' years ')
  //   }
  // }
  
  // let myObj1 = {
  //   name : 'Anirudh',
  //   music:true,
  //    org:'secure value',
  // }
  
  
  // myObj.getDetails.apply(myObj1,["executive",2])

  //Ex-2:

  // let myObj = {
  //   name : 'Abhishek',
  //   org:'Pure',
  //   sal:'1500',
  //   getDetails : function (val , data ) {
  //     let org
  //     console.log(!this.org)
  //     if (!this.org) {
  //       org = val
  //     } else {
  //       org = this.org
  //     } 
  //     let num = data
  //     console.log('Hi my name is '+this.name + ' My org is ' + org  + ' the data is ' + num)
  //   }
  // }
  
  // let myObj1 = {
  //   name : 'Anirudh',
  //   org  :"secure",
  //   music:true,
  // }
  
  
  // myObj.getDetails.apply(myObj1,['Amazon' , 90])
  

    //Bind() function in Object

    // let myObj = {
    //   name : 'Abhishek',
    //   org:'Pure',
    //   sal:'1500',
    //   getDetails : function (val , data ) {
    //     let org
    //     if (!this.org) {
    //       org = val
    //     } else {
    //       org = this.org
    //     } 
    //     let num = data
    //     console.log('Hi my name is '+this.name + ' My org is ' + org  + ' the data is ' + num)
    //   }
    // }
    
    // let myObj1 = {
    //   name : 'Anirudh',
    //   org  :"secure",
    //   music:true,
    // }
    
    // let fn = myObj.getDetails.bind(myObj1, 'Amazon' , 90)
    // console.log(fn)
    // fn()


    