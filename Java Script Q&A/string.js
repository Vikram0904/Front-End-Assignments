//Write a JavaScript Program to Print All Combinations of a given String.

var inputString = "abc";
function  printCombinations(str){
        let combinations = [];
        for(let i = 0 ;i < str.length; i++)
        {
          //0<3 //1<3 //2<3
            for(let j =i+1; j<str.length+1; j++)
            {
              //1<4//2<4//3<4  //2<4//3<4 3<4
                combinations.push(str.slice(i , j));
            }
        }
        return combinations;
    }
console.log(printCombinations(inputString));

//Output:
//   ["a", "ab", "abc", "b", "bc", "c"]
