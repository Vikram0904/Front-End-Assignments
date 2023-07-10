// Write a JavaScript Program to print all the Prime Factors of the Given Number.

var arr = [];
var num = 8;
for (var i = 2; i <= num; i++) {
if (num % i === 0) {
    arr.push(i);
    num = Math.floor(num / i);
    i--;
    }
}
console.log(arr);

//Output:
// [2, 2, 2]