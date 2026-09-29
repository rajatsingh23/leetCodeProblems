// 4006. Count Valid Prefixes
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a binary string s.

// A prefix of s is considered valid if its characters can be rearranged to form an alternating string.

// Return the number of valid prefixes of s.

// A string is considered alternating if no two adjacent characters are equal.

 

// Example 1:

// Input: s = "00101"

// Output: 3

// Explanation:

// The valid prefixes are:

// "0": It is already an alternating string.
// "001": It can be rearranged into "010", which is an alternating string.
// "00101": It can be rearranged into "01010", which is an alternating string.
// Thus, the answer is 3.

// Example 2:

// Input: s = "101"

// Output: 3

// Explanation:

// All prefixes of s = "101" are already alternating strings. Thus, the answer is 3.

 

// Constraints:

// 1 <= s.length <= 100
// s consists only of '0' and '1'.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function(s) {
    let ans = 0;
    let zero = 0;
    let one = 0;
    for(let ch of s){
        if(ch == "0"){
            zero++;
        }
        if(ch == "1"){
            one++;
        }
        if(zero == one || zero == one - 1 || zero - 1 == one){
            ans++;
        }
    }
    return ans;
};