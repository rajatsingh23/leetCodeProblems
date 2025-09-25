// 1624. Largest Substring Between Two Equal Characters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.
 

// Constraints:

// 1 <= s.length <= 300
// s contains only lowercase English letters.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    // make an freq, loop through the s, find first index and last, keep it to result
    // if it greater than result, at the end return the result
    let ans = -1;
    let freq = {}

    for(let i = 0; i < s.length; i++){
        freq[s[i]] = (freq[s[i]] || 0) + 1;

    }

    for(let [key, value] of Object.entries(freq)){
        if(value > 1){
            ans = Math.max(ans, s.lastIndexOf(key) - s.indexOf(key) - 1) 
        }
    }

    return ans;
};