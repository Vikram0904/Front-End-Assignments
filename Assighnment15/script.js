
let num1=21 ; 
let num2=45 ;
if(num1 > num2){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num1){
    console.log(`${num2} is the largest number`)
  }
  else{
    console.log(`${num1} is equal to ${num2}`)
  }

let Num1=34 ; 
let Num2=18 ;
if(Num1 > Num2){
    console.log(`${Num1} is the largest number`)
  }
  else if (Num2 > Num1){
    console.log(`${Num2} the largest number`)
  }
  else{
    console.log(`${Num1} is equal to ${Num2}`)
  }

let Number1=41 ; 
let Number2=41 ;
if(Number1 > Number2){
    console.log(`${Num1} is the largest number`)
  }
else if (Number2 > Number1){
    console.log(`${Number2} the largest number`)
  }
else{
    console.log(`${Number1} is equal to ${Number2}`)
  }

  let num=56
if(num % 2 == 0){
    console.log(`${num} is a Even number`)
  }
else{
    console.log(`${num} is a Odd number`)
  }

let num3=23
if(num3 % 2 == 0){
    console.log(`${num3} is a Even number`)
  }
else{
    console.log(`${num3} is a Odd number`)
  }

  let num4=12
  if(num4 % 2 == 0){
    console.log(`${num4} is a Even number`)
  }
  else{
    console.log(`${num4} is a Odd number`)
  } 
  
  let num5=99
  if(num5 % 2 == 0){
    console.log(`${num5} is a Even number`)
  }
  else{
    console.log(`${num5} is a Odd number`)
  } 

  let num6=21
  let num7=45
  let num8=13
  if(num6 > num7 && num6 > num8){
    console.log(`${num6} is the largest number`)
  }
  else if (num7 > num8){
    console.log(`${num7} is the largest number`)
  }
  else{
    console.log(`${num8} is the largest number`)
  }

  let Num6=34
  let Num7=18
  let Num8=52
  if(Num6 > Num7 && Num6 > Num8){
    console.log(`${Num6} is the largest number`)
  }
  else if (Num7 > Num8){
    console.log(`${Num7} is the largest number`)
  }
  else{
    console.log(`${Num8} is the largest number`)
  }

  
  let Number6=89
  let Number7=11
  let Number8=11
  if(Number6 > Number7 && Number6 > Number8){
    console.log(`${Number6} is the largest number`)
  }
  else if (Number7 > Number8){
    console.log(`${Number7} is the largest number`)
  }
  else{
    console.log(`${Number8} is the largest number`)
  }

let side1=12
let side2=12
let side3=12  
if((side1 == side2) && (side1 == side3)){
    console.log(`Equilateral triangle.`)
  }
else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log(`Isosceles triangle.`)
  }
else{
    console.log(`Scalene triangle.`)
  }

  let Side1=20
  let Side2=20
  let Side3=31  
  if((Side1 == Side2) && (Side1 == Side3)){
      console.log(`Equilateral triangle.`)
    }
  else if ((Side1 == Side2) || (Side2 == Side3) || (Side1 == Side3)){
      console.log(`Isosceles triangle.`)
    }
  else{
      console.log(`Scalene triangle.`)
    }
 
    let side4=5
    let side5=4
    let side6=3  
    if((side4 == side5) && (side4 == side6)){
        console.log(`Equilateral triangle.`)
      }
    else if ((side4 == side5) || (side5 == side6) || (side4 == side6)){
        console.log(`Isosceles triangle.`)
      }
    else{
        console.log(`Scalene triangle.`)
      }
    
    let num9=15
    let start=11
    let end=30

    if(num9 >= start && num9 <= end){
        console.log(`${num9} is between the range ${start} and ${end}`)
      }
    else{
        console.log(`${num9} is outside the range ${start} and ${end}`)    
      }
    
    let Num9=20
    let Start=34
    let End=51
  
      if(Num9 >= Start && Num9 <= End){
          console.log(`${Num9} is between the range ${Start} and ${End}`)
        }
      else{
          console.log(`${Num9} is outside the range ${Start} and ${End}`)    
        }
    
        function checkLeapYear(year){
   
            if( (0 == year%4) || (0 == (year%400)) )
              {
              console.log(year +" "+'is Leap Year' )
              }
            else
              {
                console.log(year +" "+'is Not Leap Year')
              }
              
           }
         
         checkLeapYear(2020);
         checkLeapYear(2021);
         checkLeapYear(1992);
         checkLeapYear(1994);
         checkLeapYear(1996);
         checkLeapYear(2010);
         checkLeapYear(2011);
         

         
var mark=91
var val1=90
var val2=100

if(mark>val1 && mark<=val2){
    console.log("S Grade")
  }
else{
    console.log("Invalid Marks")
  }  
    

var mark1=85
var val3=80
var val4=90

if(mark1>val3 && mark1<=val4){
    console.log("A Grade")
  }
else{
    console.log("Invalid Marks")
  } 


var mark3=73
var val5=70
var val6=80

if(mark3>val5 && mark3<=val6){
    console.log("B Grade")
  }
else{
    console.log("Invalid Marks")
  } 


var mark4=61
var val7=60
var val8=70

if(mark4>val7 && mark4<=val8){
    console.log("C Grade")
  }
else{
    console.log("Invalid Marks")
  }  
    

var mark5=56
var val9=50
var val10=60

if(mark5>val9 && mark5<=val10){
    console.log("D Grade")
  }
else{
    console.log("Invalid Marks")
  }  
    

var mark6=105
var val11=40
var val12=50

if(mark6>val11 && mark<val12){
    console.log("E Grade")
  }
else{
    console.log("Invalid Marks")
  }  


var mark7=34
var val13=0
var val14=40

if(mark7>val13 && mark7<=val14){
    console.log("Student Has Failed")
  }
else{
    console.log("Invalid Marks")
  } 


  function daysInMonth(month,year)
  {
    if((month==2) && (year%4 == 0))
    {
      console.log("29 days");
    }
    else if((month==2))
    {
      console.log("28 days") ;
    }
    else if( ((month==4) || (month==6)) ||((month==9) || (month==11)) ){
      console.log("30 days");
    }
    else if(month > 12){
      console.log("Invalid Month");
    }
    else{
      console.log ("31 Days");
    }
  }
  
  daysInMonth(2,2012);
  daysInMonth(2,2013);
  daysInMonth(4,2012);
  daysInMonth(10,2013);
  daysInMonth(16,2009);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


  











    































    












    





















         



