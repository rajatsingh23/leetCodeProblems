// 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //make arr of s;
    //make an set of vowels;
    //use two pointer from left to right;
    //if left has vowel then keep it there,
    //if right has vowel then swap two and left-- and right++;
    //else just right--;
    let arr = s.split('')
    let vowels = new Set('aeiouAEIOU')
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(vowels.has(arr[left]) && vowels.has(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
            continue;
        }else if(vowels.has(arr[left])){
            right--;
        }else if(vowels.has(arr[right])){
            left++;
        }else{
            left++;
            right--;
        }
    }
    return arr.join('')
};