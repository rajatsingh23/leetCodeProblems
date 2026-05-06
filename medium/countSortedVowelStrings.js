// 1641. Count Sorted Vowel Strings
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

// Example 1:

// Input: n = 1
// Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
// Example 2:

// Input: n = 2
// Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
// Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
// Example 3:

// Input: n = 33
// Output: 66045
 

// Constraints:

// 1 <= n <= 50

//solution

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let memo = Array.from({ length: n + 1 }, () =>
        Array(5).fill(-1)
    );

    function dp(len, vowel) {
        // completed string
        if (len === 0) return 1;

        if (memo[len][vowel] !== -1) {
            return memo[len][vowel];
        }

        let total = 0;

        for (let next = vowel; next < 5; next++) {
            total += dp(len - 1, next);
        }

        memo[len][vowel] = total;
        return total;
    }

    let ans = 0;

    for (let v = 0; v < 5; v++) {
        ans += dp(n - 1, v);
    }

    return ans;
};