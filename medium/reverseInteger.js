// 7. Reverse Integer
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

//solution


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //make string of x, if - then remove first character if positive simple continue,
    // make arr, reverse it, parse Int if -ve make -ve return the ans; also check the range
    let a = ''
    let ans = 0;
    if(x < 0){
        a = String(x * -1)
        let arr = a.split('').reverse()
        ans = parseInt(arr.join('')) * -1
    }else if(x > 0){
        a = String(x)
        let arr = a.split('').reverse()
        ans = parseInt(arr.join(''))
    }
    if(ans < ((-2) ** 31) || ans > ((2 ** 31) -1)){
        return 0
    }

    return ans;
};