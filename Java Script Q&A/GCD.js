//Write a JavaScript Program to find GCD of two given numbers.

let a=45
let b=75
let GCD;

for(i=1;i<=a;i++)
{
    if(a%i===0 && b%i===0)
    {
        GCD=i;
    }
}
console.log(GCD)

//Output:
// 15