// 680. Valid Palindrome II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

//solution

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    //make arr of s;
    //use two pointer to loop through the arr;
    //if left is not same as right then count++;
    //if left + 1 is right or right - 1 is left; 
    //then carry on
    //if count is more then 1 return false;
    let arr = s.split('')
    let left = 0;
    let right = s.length -1;

    function isPal(i, j){
        while(i < j){
            if(arr[i] !== arr[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    while(left < right){
        if(arr[left] === arr[right]){
            left++;
            right--;
        }else{
            return isPal(left + 1, right) || isPal(left, right - 1);
        }
    }

    return true;
};