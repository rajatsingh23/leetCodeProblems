// 1081. Smallest Subsequence of Distinct Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let lastIndex = {};
    let stack = [];
    let seen = new Set();
    for(let i = 0; i < s.length; i++){
        lastIndex[s[i]] = i;
    }
    for(let i = 0; i < s.length; i++){
        let ch = s[i]
        if(seen.has(ch)) continue;

        while(
            stack.length > 0 &&
            stack[stack.length - 1] > ch &&
            lastIndex[stack[stack.length - 1]] > i
        ){
            seen.delete(stack.pop())
        }
        seen.add(ch);
        stack.push(ch)
    }
    return stack.join('')
};