// 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

// Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

 

// Example 1:

// Input: s = "?zs"
// Output: "azs"
// Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
// Example 2:

// Input: s = "ubv?w"
// Output: "ubvaw"
// Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
 

// Constraints:

// 1 <= s.length <= 100
// s consist of lowercase English letters and '?'.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    // make an arr of character, loop through the arr, take index of ? if previous and forward equal to arr, continue else replace and break;
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let targetIndex = s.indexOf('?')
    while(targetIndex >= 0){
        for(let i = 0; i < arr.length; i++){
        if(arr[i] !== s.charAt(targetIndex-1) && arr[i] !== s.charAt(targetIndex+1)){
            s = s.replace('?', arr[i])
        }
        targetIndex = s.indexOf('?')
        }
    }


    return s
};