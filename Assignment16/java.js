//Prime Number
var count=0;
var num = 7;

for(i=1;i<=num;i++){
  if(num%i == 0)
    {
      count+=1;
    }
}
if(count == 2)
    {
      console.log(num +' '+ "is prime number")
    }
  else{
    console.log(num +' '+ "is not prime number")
  }

//Reverse Number
var num = 101;
var rev = 0;

while(num > 0)
  {
    rev = rev*10 +num%10 ;
    num = Math.floor(num/10);
  }
console.log(rev);

//Palindrome Number
var num = 132;
var rev = 0;
var val = num;

while(num > 0)
  {
    rev = rev*10 +num%10 ;
    num = Math.floor(num/10);
  }

if(val === rev)
  {
    console.log( val+' '+"Is Palindrome")
  }
else
    {
    console.log(val+' '+"Is Not Palindrome")
  }

//Palindrome String
var val = "NOON";
var rev = "";
var num = val.length-1;
var temp = val;

while(num >= 0)
  {
    rev = rev +  val[num];
    num--;
    
  }
if(temp === rev)
  {
    console.log( temp+' '+"Is Palindrome")
  }
else
    {
    console.log(temp+' '+"Is Not Palindrome")
  }



//Armstrong Number
var num = "407";
var sum = 0;
var val= num;
var noOfDigits=num.length;

while(num > 0)
  {
    sum= sum + Math.pow(num%10,noOfDigits);
    num = Math.floor(num/10);
  }

if(sum == val)
  {
    console.log(val+' '+"Is Armstrong Number" )
  }
else
    {
    console.log(val +' '+"Is Not Armstrong Number" )
  }

//Sum OF DIgit Number
  var num= 384;
  var sum = 0;
  
  while(num>0)
  {
    sum = sum + num%10;
    num=Math.floor(num/10);
  }
  
  console.log(sum);
  
//Prime Numbers In 1 to 100
var count=0;
var i,j
for(j=2;j<=100;j++)
{
  for(i=1;i<=j;i++)
  {
    if(j%i === 0)
    count++; 
  }
  if(count==2)
  console.log(j)
  count = 0;
  }

//Find the Intersection of two arrays
let arr1 = [1, 3, 4, 5, 8];
let arr2 = [3, 5, 7, 9];
let arr3=arr1.filter((ele)=>arr2.includes(ele))
console.log(arr3);

//Find the Union of Two Arrays

let array1 = [1, 3, 4, 5, 8];
let array2 = [3, 5, 7, 9];

let array3=array1.concat(array2)
let newArr=[...new Set(array3)]

console.log(newArr);