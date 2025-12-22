// 1668. Maximum Repeating Substring
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

 

// Example 1:

// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".
// Example 2:

// Input: sequence = "ababc", word = "ba"
// Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
// Example 3:

// Input: sequence = "ababc", word = "ac"
// Output: 0
// Explanation: "ac" is not a substring in "ababc". 
 

// Constraints:

// 1 <= sequence.length <= 100
// 1 <= word.length <= 100
// sequence and word contains only lowercase English letters.

//solution

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    //make an variable of word first letter;
    //loop through the sequence,
    //make a variable ans;
    //if ch starts with word first letter, then from that letter to the length of the word;
    //return ans;
    let ans = 0;
    let ch = word[0];
    let length = word.length;
    for(let i = 0; i < sequence.length; i++){
        let a = i
        if(sequence[a] === ch){
            let temp = 0;
            while(sequence.slice(a, a + length) === word){
                temp++;
                a += length
            }
            ans = Math.max(ans, temp)
        }
    }
    return ans;
};