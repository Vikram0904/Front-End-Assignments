//Write a JavaScript Program to check whether the given number is Perfect Number or NOT.

var num =496;
var sum;
for (var i = 1; i <=num; i++) {
    sum=0;
    for (var j = 1;  j<i; j++) {
    if (i%j === 0) {
    sum = sum + j;
    }
    }
}
if(sum===num){
    console.log(num +" "+ "is a Perfect Number")
}
else{
    console.log(num +" "+ "is Not a Perfect Number")
}

//Output:
//  "496 is a Perfect Number"
