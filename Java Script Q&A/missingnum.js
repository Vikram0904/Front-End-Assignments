// Find the missing Number in the given array of 1 to N.

let arr=[1,3,4,5,6,7,8,9]
let sum1=0;
let sum2=0;
for(var i=0;i<arr.length;i++){
sum1 +=arr[i];
}
for(var j=1;j<=9;j++){
sum2+=j;
}
console.log(sum2-sum1)

//Output:
//   2