// 2269. Find the K-Beauty of a Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.
// Example 2:

// Input: num = 430043, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.
 

// Constraints:

// 1 <= num <= 109
// 1 <= k <= num.length (taking num as a string)

//solution

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    //make string of num;
    //split it and make an arr;
    //make an variable ans;
    //make an variable windowDivisor;
    //make an variable left;
    //loop through the arr;
    //if k is greater than k;
    //check the modulus if it is ans++;
    let str = String(num);
    let arr = str.split('')
    let ans = 0;
    let windowDivisor = ''
    for(let i = 0; i < arr.length; i++){
        windowDivisor += arr[i]
        if(i >= k - 1){
            let windowNum = Number(windowDivisor)
            if(num % windowNum === 0){
                ans++;
            }
            windowDivisor = windowDivisor.slice(1, windowDivisor.length)
        }
    }

    return ans;
};