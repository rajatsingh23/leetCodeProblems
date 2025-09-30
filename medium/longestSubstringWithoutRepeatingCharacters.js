// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //solve it using sliding window
    //we will go left and right in the arr,
    // both the right and left will be zero
    // if seen has the value then we will remove it from left
    // else we will keep adding it to the right
    // then will also note the max and at last max will be returned

    let seen = new Set()
    let left = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++){
        while(seen.has(s[i])){
            seen.delete(s[left])
            left++;
        }
        seen.add(s[i])
        max = Math.max(max, seen.size)
    }

    return max;
};