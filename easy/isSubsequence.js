// 392. Is Subsequence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


//solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //let Scount, Tcount. 
    //while Tcount is less than t.length, check if s === t, str = str + s.char
    // return s = t
    let sCount = 0;
    let tCount = 0;
    let str = ''
    while(tCount < t.length){
        if(s.charAt(sCount) === t.charAt(tCount)){
            str = str + t.charAt(tCount)
            sCount++;
            tCount++;
          
        }else{
            tCount++;
        }
    }

    return str === s
};