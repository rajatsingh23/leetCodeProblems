// 2085. Count Common Words With One Occurrence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".
 

// Constraints:

// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.

//solution

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    //create two different maps, loop through the first if second map also 1 then push to ans
    let ans = 0
    let map1 = new Map()
    let map2 = new Map()
    let max = Math.max(words1.length, words2.length)
    for(let i = 0; i < max; i++){
        if(words1[i]){
           map1.set(words1[i], (map1.get(words1[i]) || 0) + 1) 
        }
        if(words2[i]){
            map2.set(words2[i], (map2.get(words2[i]) || 0) + 1)
        }
    }
    for(let [key, value] of map1){
        if(value === 1 && map2.get(key) === 1){
            ans++
        }
    }
    return ans;
};