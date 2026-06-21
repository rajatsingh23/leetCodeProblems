// 2840. Check if Strings Can be Made Equal With Operations II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.

// You can apply the following operation on any of the two strings any number of times:

// Choose any two indices i and j such that i < j and the difference j - i is even, then swap the two characters at those indices in the string.
// Return true if you can make the strings s1 and s2 equal, and false otherwise.

 

// Example 1:

// Input: s1 = "abcdba", s2 = "cabdab"
// Output: true
// Explanation: We can apply the following operations on s1:
// - Choose the indices i = 0, j = 2. The resulting string is s1 = "cbadba".
// - Choose the indices i = 2, j = 4. The resulting string is s1 = "cbbdaa".
// - Choose the indices i = 1, j = 5. The resulting string is s1 = "cabdab" = s2.
// Example 2:

// Input: s1 = "abe", s2 = "bea"
// Output: false
// Explanation: It is not possible to make the two strings equal.
 

// Constraints:

// n == s1.length == s2.length
// 1 <= n <= 105
// s1 and s2 consist only of lowercase English letters.

//solution

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let s1Even = [];
    let s2Even = [];
    let s1Odd = [];
    let s2Odd = [];

    for(let i = 0; i < s1.length; i++){
        if(i % 2 === 0){
            s1Even.push(s1[i]);
            s2Even.push(s2[i]);
        }else{
            s1Odd.push(s1[i]);
            s2Odd.push(s2[i]);
        }
    }

    s1Even.sort();
    s2Even.sort();
    s1Odd.sort();
    s2Odd.sort();
    return s1Even.join('') === s2Even.join('') && s1Odd.join('') === s2Odd.join('')
};