// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.



//SOLUTION

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const freq = {};

    // Count all characters in the text
    for (let char of text) {
        if ('balon'.includes(char)) {
            freq[char] = (freq[char] || 0) + 1;
        }
    }

    // 'l' and 'o' are needed twice, others once
    return Math.floor(
        Math.min(
            freq['b'] || 0,
            freq['a'] || 0,
            Math.floor((freq['l'] || 0) / 2),
            Math.floor((freq['o'] || 0) / 2),
            freq['n'] || 0
        )
    );
};