// //Find Vowels
// var arr=[ 'Hai','Welcome','To','All','TODAY','We','Learn','Array'];
// var count=0;
// var vowels=[];

// for(i=0;i<=arr.length-1;i++)
//   {
//   for(j=0;j<=arr[i].length-1;j++){
//     if(arr[i][j]==('a')||arr[i][j]==('e')||arr[i][j]==('i')||arr[i][j]==('o')||arr[i][j]==('u')||arr[i][j]==('A')||arr[i][j]==('I')||arr[i][j]==('O')||arr[i][j]==('E')||arr[i][j]==('U'))
//       {
//       vowels.push(arr[i][j]) ;
//       count++;
//       }
//     }
//   }
// console.log(vowels);
// console.log(count);

// //Find Even Numbers In Array

// var array =[1,2,3,4,5,6,7,8,9,10];
// var result=[];

// for(var i=0;i<array.length;i++)
//   {
//     if(array[i]%2 === 0)
//     result.push(array[i]);
//   }
// console.log(result);


// //Sum Of Digits In Array
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = [];
// var sum = 0;

// for (i = 0; i < array.length; i++) {
//   if (i < 5) {
//     sum = sum + array[i];
//     if (i == 4) {
//       result.push(sum);
//     }
//   } else {
//     result.push(array[i]);
//   }
// }

// console.log(result);

// //Find Number In The Between Array

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var num = 36;
// var isPresent = false;

// for (i = 0; i < array.length; i++) {
//   if (num === array[i]) {
//     isPresent = true;
//     break;
//   }
// }

// if (isPresent) {
//   console.log(num + " " + "Is Present The Array");
// } else {
//   console.log(num + " " + "Is Not Present The Array");
// }

// //Find Prime Numbers In Between Array
// var array = [13,7,4,5,6,7,8,9,10,11,2];
// var array2 = [];
// prime = true; 

// for(i=0;i<array.length;i++)
// {
//   for(j=2;j<array[i];j++)
//   {
//     if(array[i]%j === 0)
//       {
//         prime = false;
//         break;
//       }
//   }
//   if(prime){
//   array2.push(array[i]);
//   }
//   prime =true;

// }
// console.log(array2)


