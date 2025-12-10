// 844. Backspace String Compare
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
 

// Follow up: Can you solve it in O(n) time and O(1) space?

//solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //loop through the s;
    //if it is # then we go back and change it to '' also the # to ''
    //use while loop to go back if is not '' then change to ''
    //do this for both;
    let arr = s.split('')
    let arrT = t.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '#'){
            let left = 0;
            let right = i - 1;
            while(right >= left){
                if(arr[right] !== ''){
                    arr[right] = ''
                    arr[i] = '' 
                    break;
                }
                right--;
            }
            arr[i] = ''
        }
    }

    for(let i = 0; i < arrT.length; i++){
        if(arrT[i] === '#'){
            let left = 0;
            let right = i - 1;
            while(right >= left){
                if(arrT[right] !== ''){
                    arrT[right] = ''
                    arrT[i] = '' 
                    break;
                }
                right--;
            }
            arrT[i] = ''
        }
    }

    return arr.join('') === arrT.join('')
};