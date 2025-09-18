// 409. Longest Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //Give each number it's freq if freq is even count++, at the end just return the count

    let count = 0;
    let freq = {}
    let oddCheck = false;
    for(let i = 0; i < s.length; i++){
        freq[s[i]] = (freq[s[i]] || 0) + 1
    }

    for(let value of Object.values(freq)){
        if(value % 2 === 0){
            count = count + value
        }else{
            count = count + value - 1
            oddCheck = true;
        }
    }

    if(oddCheck) count = count + 1;
    

    return count;
    
};