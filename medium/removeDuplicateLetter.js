// 316. Remove Duplicate Letters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
 

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

//solution


var removeDuplicateLetters = function(s) {
    let lastIndex = {};
    let stack = [];
    let seen = new Set();

    // Store the last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // Skip characters already in the result
        if (seen.has(char)) continue;

        // Remove larger characters if they appear again later
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop());
        }

        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
};
