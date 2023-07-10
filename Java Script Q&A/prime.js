//  Write a JavaScript Program to print Prime Numbers from 1 to N.

var count=0;
var i,j
for(j=2;j<=20;j++)
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

//Output:
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
