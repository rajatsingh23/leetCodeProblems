// 925. Long Pressed Name
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 

// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.

//solution

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    //make two counter i and j;
    //make two variables n and m for both lengths;
    //loop through the typed string;
    //if i < n and both ch are same; just do i++;j++;
    //if j > 0 and prev ch is same as current j then j++;
    //else return false;
    //at the end return if true;
    let i = 0;
    let j = 0;
    let n = name.length;
    let m = typed.length;
    while(j < m){
        if(i < n && name[i] === typed[j]){
            i++;
            j++;
        }else if(j > 0 && typed[j] === typed[j-1]){
            j++;
        }else{
            return false;
        }
    }
    return i === n;
};