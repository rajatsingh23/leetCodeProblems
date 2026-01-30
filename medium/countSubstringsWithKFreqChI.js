// 3325. Count Substrings With K-Frequency Characters I
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s and an integer k, return the total number of substrings of s where at least one character appears at least k times.

 

// Example 1:

// Input: s = "abacb", k = 2

// Output: 4

// Explanation:

// The valid substrings are:

// "aba" (character 'a' appears 2 times).
// "abac" (character 'a' appears 2 times).
// "abacb" (character 'a' appears 2 times).
// "bacb" (character 'b' appears 2 times).
// Example 2:

// Input: s = "abcde", k = 1

// Output: 15

// Explanation:

// All substrings are valid because every character appears at least once.

 

// Constraints:

// 1 <= s.length <= 3000
// 1 <= k <= s.length
// s consists only of lowercase English letters.

//solution

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
    //make map;
    //make a left;
    //make a ans;
    //make a goodCh;
    //loop using right;
    //mark freq of right;
    //while goodCh > 0; ans += n - right;
    //if freq[left] === k; goodCh--;
    //left++, freq[left]--;
    

    let map = new Map();
    let left = 0;
    let ans = 0;
    let goodCh = 0;
    let n = s.length;

    for(let right = 0; right < n; right++){
        let c = s[right];
        
        map.set(c, (map.get(c) || 0) + 1);
        if(map.get(c) === k){
            goodCh++;
        }

        while(goodCh > 0){
            let l = s[left]
            ans += n - right;

            if(map.get(l) === k){
                goodCh--;
            }

            map.set(l, map.get(l) - 1);
            left++;
        }
        
    }

    return ans;
};