// 139. Word Break
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

//solution

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //make an set of wordDict;
    //make an dp arr with s.length + 1 legnth;
    //dp[0] will be zero;
    //loop through the s;
    //loop through the dp arr;
    //if dp and substring is in set; make that dp true;
    //return last dp;
    let set = new Set(wordDict);
    let dp = Array(s.length + 1).fill(false)
    dp[0] = true;

    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j <i; j++){
            if(dp[j] && set.has(s.substring(i, j))){
                dp[i] = true
                break;
            }
        }
    }

    return dp[s.length]
};