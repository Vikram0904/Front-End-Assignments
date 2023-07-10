1//Write a JavaScript Program to find the Intersection of two arrays

let array1 = [1, 3, 4, 5, 8];
let array2 = [3, 5, 7, 9];

function findIntersection(a,b){
let newArr=[];
for(var i=0;i<array1.length;i++){
    for(var j=0;j<array2.length;j++){
    if(array1[i]===array2[j]){
    newArr.push(array1[i])
    } 
    }
}
return newArr
}
let result =findIntersection(array1, array2)
console.log(result);

 // Output: [3, 5]