// 884. Uncommon Words from Two Sentences
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"

// Output: ["sweet","sour"]

// Explanation:

// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"

// Output: ["banana"]

 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

//solution

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    //loop through the arr, make an freq, loop through the freq if 1 return that freq
    let freq = {}
    let arr = s1.split(' ').concat(s2.split(' '))

    for(let i = 0; i < arr.length; i++){
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    let result = []

    for(let [key, value] of Object.entries(freq)){
        if(value === 1){
            result.push(key)
        }
    }
    return result
};