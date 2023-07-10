// Write a javaScript program to LCM of TWO given number

var number=10
var number1=13

let div=0;

for(i=1;i<=number&&i<=number1;i++)
{
    if(number%i===0&&number1%i===0)
    {
        div=i;
    }
}
let lcm= (number*number1)/div
console.log(lcm)

//Output:
//  130
