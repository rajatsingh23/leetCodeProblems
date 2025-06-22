// You are given a string caption representing the caption for a video.

// The following actions must be performed in order to generate a valid tag for the video:

// Combine all words in the string into a single camelCase string prefixed with '#'. A camelCase string is one where the first letter of all words except the first one is capitalized. All characters after the first character in each word must be lowercase.

// Remove all characters that are not an English letter, except the first '#'.

// Truncate the result to a maximum of 100 characters.

// Return the tag after performing the actions on caption.

 

// Example 1:

// Input: caption = "Leetcode daily streak achieved"

// Output: "#leetcodeDailyStreakAchieved"

// Explanation:

// The first letter for all words except "leetcode" should be capitalized.

// Example 2:

// Input: caption = "can I Go There"

// Output: "#canIGoThere"

// Explanation:

// The first letter for all words except "can" should be capitalized.

// Example 3:

// Input: caption = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

// Output: "#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

// Explanation:

// Since the first word has length 101, we need to truncate the last two letters from the word.

 

// Constraints:

// 1 <= caption.length <= 150
// caption consists only of English letters and ' '.

//solution

/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    let ans = '#'
    let arr = caption.trim().split(' ')
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            if(arr[i].length < 100){
                ans = ans + arr[i].toLowerCase()
            }else{
                ans = ans + arr[i].slice(0, 99).toLowerCase()
            }
        }else{
            if(arr[i].length > 100){
                let newWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, 100).toLowerCase()
                ans = ans + newWord
            }else{
                ans = ans + arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase()
            }
        }
        
    }
    return ans.slice(0, 100);
};