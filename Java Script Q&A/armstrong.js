//Write a JavaScript Program to check whether the given number is Armstrong Number or NOT.

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

//Output:
//   "153 Is Armstrong Number"