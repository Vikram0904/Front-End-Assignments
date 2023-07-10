//Write a JavaScript Program to print all the Factors of any Given number.

var number = 6; 

console.log(`The Factors Of ${number}  is:`);

for (i = 1; i <= number; i++) { 
if(number%i === 0){
console.log(i);
}
}
//Output:
//"The Factors Of 6  is:"
//1
//2
//3
//6