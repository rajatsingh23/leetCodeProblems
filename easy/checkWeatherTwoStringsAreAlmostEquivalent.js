// 2068. Check Whether Two Strings are Almost Equivalent
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

 

// Example 1:

// Input: word1 = "aaaa", word2 = "bccb"
// Output: false
// Explanation: There are 4 'a's in "aaaa" but 0 'a's in "bccb".
// The difference is 4, which is more than the allowed 3.
// Example 2:

// Input: word1 = "abcdeef", word2 = "abaaacc"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
// - 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
// - 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
// - 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
// - 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
// - 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.
// Example 3:

// Input: word1 = "cccddabba", word2 = "babababab"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 2 times in word1 and 4 times in word2. The difference is 2.
// - 'b' appears 2 times in word1 and 5 times in word2. The difference is 3.
// - 'c' appears 3 times in word1 and 0 times in word2. The difference is 3.
// - 'd' appears 2 times in word1 and 0 times in word2. The difference is 2.
 

// Constraints:

// n == word1.length == word2.length
// 1 <= n <= 100
// word1 and word2 consist only of lowercase English letters.

//solution

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    //create map of word1
    //create map of word2.
    //loop through word1, count difference of both map
    //if greater than 3 return false
    //return true;
    let map1 = new Map()
    let map2 = new Map()
    let set = new Set(word1 + word2)
    for(let i = 0; i < word1.length; i++){
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1)
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1)
    }
    for(let ch of set){
        let first = map1.get(ch) || 0
        let second = map2.get(ch) || 0
        let check = Math.abs(first - second)
        if(check > 3) return false;
    }
    return true;
    
};