// 3090. Maximum Length Substring With Two Occurrences
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
 

// Example 1:

// Input: s = "bcbbbcba"

// Output: 4

// Explanation:

// The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".
// Example 2:

// Input: s = "aaaa"

// Output: 2

// Explanation:

// The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".
 

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    //make an map;
    //make an variable ans;
    //make an variable left;
    //loop throguht the arr using right;
    //if more than 2 keep deleting each map if not less than 2;
    //return max of ans and r - l + 1
    let map = new Map()
    let ans = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++){
        map.set(s[right], (map.get(s[right]) || 0) + 1)

        while(map.get(s[right]) > 2){
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans;
};