// 2423. Remove Letter To Equalize Frequency
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot choose to do nothing.
 

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
 

// Constraints:

// 2 <= word.length <= 100
// word consists of lowercase English letters only.

//solution

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let map = new Map();

    // Count character frequencies
    for (let ch of word) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Try removing one occurrence of each character
    for (let [key, value] of map) {
        map.set(key, value - 1);

        let freq = [...map.values()].filter(v => v > 0);

        if (new Set(freq).size === 1) {
            return true;
        }

        map.set(key, value);
    }

    return false;
};