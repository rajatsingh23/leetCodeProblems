// 728. Self Dividing Numbers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]
 

// Constraints:

// 1 <= left <= right <= 104

//solution

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];
    while(left <= right){
        if(left < 10){
            ans.push(left);
            left++;
            continue;
        }
        let temp = left;
        while(temp >= 0){
            if(temp === 0) ans.push(left);
            let last = temp % 10;
            if(last === 0) break;
            if(left % last !== 0) break;
            temp = Math.floor(temp / 10);
        }
        left++;
    }
    return ans;
};