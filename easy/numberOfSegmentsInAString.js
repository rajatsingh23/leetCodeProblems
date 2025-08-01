// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 

// Constraints:

// 0 <= s.length <= 300
// s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
// The only space character in s is ' '.


//solution

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    //replace it with ''. then split .length;
    
    let count = 0;
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ' ' &&  arr[i] !== ''){
            count++
        }
    }
    return count;
};