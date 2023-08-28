

// function reversalVal(num) {
//     var rev = 0;
//     var array = [];

//     for (var i = 0; i < num.length; i++) {
//         num1 = num[i];
//         if (num1 < 0) {
//             num2 = -num1;
//         } else {
//             num2 = num1;
//         }

//         while (num2 > 0) {
//             rev = rev * 10 + (num2 % 10);
//             num2 = Math.floor(num2 / 10);
//         }
//         array.push(num1 < 0 ? -rev : rev);
//         rev = 0;
//     }
//     return array;
// }
// var num = [-145, 876, 352, 976, 657, -534];
// var reversed = reversalVal(num);

// console.log(reversed);

// //function expression
// let name = function mul() {
//     var a = 7;
//     var b = 10;
//     result = a * b;
//     console.log(result)
// };
// name()

// //Hoisting
// function abc(a, b) {
//     console.log(a);
//     console.log(b);
//     var mul = function def(c) {
//         console.log(c)
//     }
//     mul(65)
// }
// abc(5, 5)

// //InPure Function
// function calculate(val)
// {
//   a=a+7;
//   return Math.floor(val/4) ;
// }
//   let a=5
// console.log(calculate(10))
// console.log(calculate(10))
// console.log(a)

// //Callback Function
// function calculate(a,b,cb)
// {
//   let sum = a+b;//6
//   cb(sum);    //mul(6)
// }
// function mul(val)
// {
//   console.log(val*10); //60
// }
  
// calculate(2,4,mul)
  

// //Call Stack Function
//  function dude(val){
 
//   let sum=val*10;
//   let mul=sum*2;
//   let div=Math.floor(mul/3);
   
//   console.log(div);
//   console.log(sum);
//   return sum;
// }

// let sum=dude(25);

// console.log(print(sum,sI));

// function print(sum,cb){
//   console.log(sum+"hello");
//   let I=cb(sum,2,3);
//   console.log(sum+I);
//   return I;
// }
// function sI(p,r,t){
//    return Math.floor((p*r*t)/100);
// } 

// //Call Stack Function Ex-2

// function stack(arr)
// {
//   var a=10;
//   var b=40;
//   var sum=a+b;
//   var div=Math.pow(arr,2);
//     console.log(sum);
//   return sum;
//  console.log(div);
//   console.log(a*b);
//  }

//  let div=stack(8)

//  console.log(call(div,back,method))
//  console.log(div)
 
//  function call(div,flow,join)
// {
//   let d=10;
//   let arr1=[89,76,53,15,898];
//   let c= arr1.slice(3,4);
//   console.log(c);
//   let mul=join(5,3)
//   let val=flow(d,4,7);
//   console.log(Math.floor(val*10))
//   return mul;
//   }
// function back(h,j,i)
// {
// return Math.floor((h+j*i)/3);//12
// }
// function method(e,f)
// {
//   console.log(e*f);
//   return Math.pow(f,3);//27
// }

  
// Call Stack Ex-3

// function calculate(num)
// {
//   let sum = a+b;//30//35
//       a = a+5;//15//20
//   console.log(sum);
//   let val1 = num + sum;//35//40
//   let calc= a*b;//15*20//20*20
//   console.log(calc);//300//400
//   return Math.floor(val1/2);//35/2=17//40/2=20
// }
// let a=10;
// let b=20;
// let val=calculate(5);//17


//   console.log(a);//15
//  console.log(math(plus,minus,mul,div))
//   console.log(calculate(5))
 
//   function plus(num1)
// {
//   let cal=num1+15;
//   console.log (cal);//20
//   return Math.pow(cal,2);
// }
// function minus(q,w)
// {
//   console.log(q*w);//16
//   return Math.pow(q*w/4,2);
// }

//  function math(html,css,java,console)
// {
//   let arr=[5,6,7,8,10,15.42,89]
//   let c =arr.slice(2,3);
//   let d =arr.splice(1,4);
//   console.log(d);//[6,7,8,10]
//   console.log(c);//[7]
//   let val2=java(8,4);
//   console.log(val2/2);//16
//   let val3=console(15,10,7);
//   console.log(val3/c);//3
//   let val4=html(5);//400
//   let val5=css(2,8);
//   return val4
// }
// function mul(e,f)
// {
//   let code = e*f;
//   console.log(code);//32
//   return code;
//  }
// function div(y,o,u)
// {
//   return Math.floor(y*o/u);
// }


// Function Arguments
// function result()
// {
//   console.log(arguments);
// }
// result(33,32,121,11,54,45,67,88,43)

//example-2
// function lavanya() {
//   let val = arguments[0]
//   let sum = 10+ val;
//   console.log(' I am inside the function lavanya')
//   return sum > 20 ? 50/2 : (42%3 === 0) ? 22:98
// }
// let a = lavanya(4)
// console.log(a)


// Anonymous Function-Is Not Have Function Name
// let result=function ()
// {
//   console.log(30+"30");
// }
// result()

//Arrow Function
//ex-1
// let lavanya = (data)=>{
//   let val = data;
//   let sum = 10+val;
//   console.log(' I am inside the function lavanya')
//   return sum > 20 ? 50/2 : (42%3 === 0) ? 22:98
// }

// let a = lavanya(4)
// console.log(a)

// //ex-2
// let b=5
// let calculate=(val)=>{
//        b=b+7;
//      return Math.floor(val/4) ;
// }
//  console.log(calculate(10))

// //ForEach Function
// let newarr = [49,98,92,4,76,36,77,87,45,33]
// let val =0;
// let string=['hai','welcome']
// let copyarr=[]

// newarr.forEach((ele,index)=>{
//   val=100+ele;
//   console.log('Print Index Zero Value'+'='+ele+' '+index);
//   copyarr.push(ele*2);
//   console.log(val)

// })
// string.forEach((ele,index,arr)=>{
//  arr[index]= 'hello'+ ele;
// })
  
    
// console.log(val)
// console.log(copyarr)
// console.log(string)

//Filter Function
// let arr = [2,3,1,6,5,2,9,14]

// let val1 = arr.filter((ele) => {
//   return ele > 5
// })

// console.log(val1)


//Map Function
//EX-1:
// let arr = [4,2,15,7,8,10,17,14]
  
// let val2 =arr.map((ele)=>{
//     return ele>10
// })
// console.log(val2)
  
 
// //EX-3:
// let arr1 = [4,2,15,7,8,10,17,14]
  
// let val =arr1.map((ele)=>{
//     return ele>10?ele*2:ele*4
// })
// console.log(val)
  
  
//Closure Function
//Ex-1:
// function outer () {
//     let pooja = 1020;
//     let sum = pooja+ 100;
//     return function () {
//       let val = sum*2;
//       return val;
//     }
//   }
//   let out = outer()()
//   console.log(out)

//Ex-2:

// function outer () {
//     let pooja = 2;
//     let sum = pooja+ 10;
//     return function () {
//       let val = sum*2;
//       return function () {
//         console.log('I am inside the closure fn')
//         let test = val*3;
//         return function () {
//           return function () {
//             return function () {
//               console.log('Yo Mahesh how are you')
//               return test
//             }
//           }
//         }
//       }
//     }
//   }
  
//   let a = outer()()()()()()
//   console.log(a)
  
 // Default variable
// let def =(val)=>{
//   let sum=val+15; //Nan
//   //let sum =true+15 //16
//    //let sum =false Or null+15 //16
//    //let sum =undefined+15//16
//   console.log(sum)
//   return sum*2; //Nan//32//30//Nan
// }

// let a= def()
// console.log(a) 


//Asychronus Function:

// function asyncFn() {
//   let a = 10;
//   let b = 120;
//   let c = 3;
//   let d = a+b+c
//   let e = d *a
//   let f = (c*b)/a
//   setTimeout( () => {
//     console.log(a)
//   },4000)
//   console.log(f , d , e)
//   console.log('123')
//   console.log('1234')
//   console.log('12345')
//   console.log('1235667')
//   console.log('1237654')
// }

// asyncFn()
  
//SetTimeout Use In  Call Stack Function  
// let fn1 = () => {
//     console.log(123)
//     let str = 'Ram is a good boy'
//     setTimeout(()=> {
//       console.log(str.charAt(4))
//     },4000);
    
//     fn2();
//     console.log('Fn1 completed')
//     }
  
//   let fn2 = () => {
//     let arr = [1,2,3,4,6,7]
//     let sum = 0;
//     arr.forEach((ele) => {
//       sum = sum + ele
//     })
//     setTimeout(()=> {
//       console.log(sum*2)
//     },6000)
    
//     fn3();
//     console.log('End of fn2')
//   }
  
//   let fn3 = ()=> {
//     setTimeout(()=> {
//       console.log(123);
//       setTimeout(() => {
//         console.log('Last setTimeout')
//       })
//     },1000)
//      console.log('End of fn3')
//      fn4();
//   }
//     let fn4 = ()=>{
//       str = 'hello ' + 'Ram is a good boy'
//       console.log(str)
//     }
  
//   fn1()


//Constructor Function:Object
// function human (val1 ,val2 ,val3) {
//   this.name = val1;
//   this.age =val2;
//   this.address = val3;
//   this.getDetails = function () {
//     console.log('Hi this is ' + this.name + ' my age is ' + this.age)
//   }
// }

// let hObj1 = new human('Satish',20,'Karur')
// let pooja = new human('Pooja',78,'Bangalore')

// pooja.favFood = 'Biryani';
// hObj1.favSport = 'High jump';
// pooja.favSport = 'Boxing';

// console.log(hObj1)
// console.log(pooja)

//Using Call Function In Constructor Function:
// pooja.getSportAddDetails = function () {
//   console.log(' Hi my name is ' + this.name + ' My fav sport is ' + this. favSport + ' My address is ' + this.address )
// }


// pooja.getSportAddDetails.call(hObj1)

    
//get() Function :
// let obj  = {
//   name: 'Vikram',
//   age:12,
//   salary1:1200,
//   address : 'Marathalli',
//   get salary () {
//   return this.salary1*2
// }
// }
// console.log(obj.salary)
  

//Set() Function:
// let obj  = {
//   name: 'Vikram',
//   age:12,
//   amount:1200,
//   address : 'Marathalli',
//   set salary (value) {
//   this.amount = value
// }
// }


// obj.salary = obj.amount*2
// console.log(obj.amount)

//Object.Create Method-masterObj its work like prototype of littleObj
// let masterObj = {
//   name : 'Master',
//   category :'Z',
//   attributes : 'Big dragon'
// }


// let littleObj = Object.create(masterObj)
// littleObj.power ='Spit fire'
// console.log(littleObj)

//Const KeyWord:
// const masterObj = {
//   name : 'Master',
//   category :'Z',
//   attributes : 'Big dragon'
// }

// masterObj.name = 'Master dragon'

// console.log(masterObj)

//Object.freeze & Object.isFrozen
// const masterObj = {
//   name : 'Master',
//   category :'Z',
//   attributes : 'Big dragon'
// }
// Object.freeze(masterObj)
// console.log(Object.isFrozen(masterObj))
// masterObj.name = 'Master dragon'
// masterObj.role = 'Dugen dragon'

// console.log(masterObj)
  

//Rest Operator:
// function sum (...data) {
//   let summation = 0;
//   data.forEach (ele => {
//     summation = summation+ele
//   })
//   console.log(summation)
// }
// sum (1,2,3,4,5,6,7,8,9)

//Spread Operator:
// let arr = [2,3,45,6,7,8,9,0]
// let arr1 =[5,6,3,12,34,6,7]

// let arr3 = [...arr , ...arr1]
// console.log(arr3)


// let obj1 = {
//   a:12,
//   b:13
// }
// let obj2 = {
// ...obj1,
//   name:'Tamil',
//   sal:155000,
//   b:098765
// }
// console.log(obj2)

// let obj1 = {
//   a:12,
//   b:13
// }
// let obj2 = {
  
//   name:'Tamil',
//   sal:155000,
//   b:098765
// }
// let obj3 = {...obj1,...obj2}

// console.log(obj3)

//Object.Assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(source,target);

// console.log(target);
// console.log(returnedTarget === target);


// let arr =[1,2,3,22]
// let arr1 = [3,4,5,98,899]

// let val1 = Object.assign(arr1,arr)
// console.log(arr1)
// console.log(val1)


// let obj ={
//   a:1,b:2
// }
// let obj1 = {
//   a:2,b:3,g:5
// }
// let val = Object.assign(obj,obj1)
// console.log(obj)
// console.log(val)


//Promises

// //Ex-1
// var promise = new Promise((res , rej) => {
//     res(678767)
//   })
  
//   promise.then((data) => {
//     console.log(data)
//   })

//   //Ex-2
//   function getData() {
//     console.log(1234)
//     return new Promise((res,rej)=>{
//        let b= setTimeout(()=> {
//       let a = 8*9;
//       res(a)
//     },1000)
//     })
//   console.log(78)
//   }
//   getData().then(data=>{
//     console.log(data)
//   })


// //Ex-3
// function getData() {
//     console.log(1234)
//     return new Promise((res,rej)=> {
//       let b = setTimeout(()=> {
//       let a = 8*9;
//        res(7+8)
//        rej(a)
//     },1000)
//     })
//   }
  
//   getData().then(data => {
//     console.log('Success '+ data1)
//   }).catch(e => {
//     console.log('The error is. ' + e)
//   })