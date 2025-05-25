// 1408. String Matching in an Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// All the strings of words are unique.


//solution

/**
 * @param {string[]} words
 * @return {string[]}
 */


 //P: arr of strs, non empty, lowerCase, different words, 
 //R: arr of substrings
 //E: ['mass', 'asf', 'hero', 'superhero'] => ['as', 'hero']


var stringMatching = function(words) {
    let arr = []
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if(i !== j && !arr.includes(words[j])){
                if(words[i].includes(words[j])){
                    arr.push(words[j])
                }
            }
        }
    }

    return arr;
};