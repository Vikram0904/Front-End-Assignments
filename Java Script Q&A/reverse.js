// Write a javaScript program to Reverse a given number

var num = 351;
var rev = 0;

while(num > 0)
{
    rev = rev*10 +num%10 ;
    num = Math.floor(num/10);
}
console.log(rev);

//Output:
//  153