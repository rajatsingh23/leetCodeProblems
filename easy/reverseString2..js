// 541. Reverse String II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104
 


//solution

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    //reverse first k characters of 2k string;
    //if left out string is less than 2k but equal or more than k, again reverse just k characters;
    //if left is less than k then just return the original characters;

    //reverse the charactes using two pointer;
    //make an arr of s.split(')
    //make an variable of 2k;
    //loop through that arr;
    //while i is less than k;
    //keep reveresing the arr;
    let arr = s.split('')
    for(let i = 0; i < arr.length; i+= 2 * k){
        let left = i;
        let right = Math.min(i + k -1, arr.length - 1)
        while(left < right){
            [arr[left], arr[right]] = [arr[right] , arr[left]]
            left++;
            right--;
        }

    }
    return arr.join('')
};