// 917. Reverse Only Letters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    // make an arr, start from start and end, make left and right, if left not character then skip, if right not character then skip, else reverse both of the characters , join the arr and return
    let arr = s.split('')
    // /[a-z]/g.test(s[i])
    let mid = Math.round(arr.length / 2);
    let left = 0
    let right = arr.length - 1
    while(left < right){
        if(/[a-z]/gi.test(arr[left]) && /[a-z]/gi.test(arr[right])){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++;
            right--;
        }
        if(!/[a-z]/gi.test(arr[left])){
            left++;
        }
        if(!/[a-z]/gi.test(arr[right])){
            right--;
        }

        
    }
    return arr.join('')
};