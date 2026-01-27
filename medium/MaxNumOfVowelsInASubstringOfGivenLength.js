// 1456. Maximum Number of Vowels in a Substring of Given Length
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

//solution

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    //make a set of vowels
    //make a left;
    //make a vowels variable;
    //make a ans;
    //loop using right;
    //let n = right - left + 1;
    //while n > k, if set.has then vowles--, left++;
    //if n === k, ans = max of ans , vowels;
    let set = new Set(['a', 'e', 'i', 'o', 'u']);
    let left = 0;
    let vowels = 0;
    let ans = 0;

    for(let right = 0; right < s.length; right++){
        
        if(set.has(s[right])){
            vowels++;
        }
        while(right - left + 1 > k){
            if(set.has(s[left])) vowels--;
            left++;
            
        }
        if(right - left + 1 === k){
            ans = Math.max(ans, vowels)
        }
    }

    return ans;
};