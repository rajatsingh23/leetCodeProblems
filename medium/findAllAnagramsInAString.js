// 438. Find All Anagrams in a String
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

//solution

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //create a build freq;
    //loop through the p; and fill the need map;
    //create window freq(empty)
    //create left, right, valid all equal to 0;
    //create ans arr;
    //using while loop expand the window, while(right < s.length);
    //let c = s[right];
    //right++;
    //if it is in need, check if same freq then valid++;
    //use another while loop (right - left >= p.length);
    //if valid is equal to need characters just push left to the ans;
    //let d = s[left];
    //left++;
    //if d is in need and is same as of window then valid--; window[d]--;
    //return the ans;

    let ans = []
    let need = {}
    for(let ch of p){
        need[ch] = (need[ch] || 0) + 1;
    }
    let left = 0;
    let right = 0;
    let valid = 0;
    let window = {};
    while(right < s.length){
        let c = s[right]
        right++;

        if(need[c] !== null){
            window[c] = (window[c] || 0) + 1;
            if(window[c] === need[c]) valid++;
        }

        while(right - left >= p.length){
            if(valid === Object.keys(need).length){
                ans.push(left);
            }
            let d = s[left]
            left++;

            if(need[d] !== null){
                if(need[d] === window[d]) valid--;
                window[d]--;
            }
        }

    }
    return ans;
};