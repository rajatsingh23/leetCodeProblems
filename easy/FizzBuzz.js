// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104

//solution

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let count = 1;
    let arr = []
    while(count <= n){
        if(count % 3 === 0 && count % 5 === 0){
            arr.push("FizzBuzz");
        }else if(count % 3 === 0){
            arr.push("Fizz")
        }else if(count % 5 === 0 ){
            arr.push("Buzz")
        }else{
            arr.push(`${count}`)
        }
        count++
    }
    return arr
};