// Write a JavaScript Program to print Perfect Numbers between 1 to 1000.

var num =1000 ;
var sum;
for (var i = 1; i < num; i++) {
    sum=0;
    for (var j = 1;  j<i; j++) {
    if (i%j === 0) {
    sum = sum + j;
    }
    }
if(sum===i){
    console.log(i)
}
}

//Output:
// 6
// 28
// 496
