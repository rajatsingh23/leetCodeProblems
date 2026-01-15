// 1358. Number of Substrings Containing All Three Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
// Example 3:

// Input: s = "abc"
// Output: 1
 

// Constraints:

// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

//solution

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    //make left;
    //make map to check how many times the ch appeared;
    //make variable check;
    //if map.get 1 then check++;
    //while check === 3;
    //map.get --;
    //left++;
    //res = n - right;
    let left = 0;
    let n = s.length; 
    let map = new Map();
    let res = 0;
    let check = 0;
    for(let right = 0; right < n; right++){
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        if(map.get(s[right]) === 1) check++;

        while(check === 3){
            res += n - right;
            if(map.get(s[left]) > 0){
                map.set(s[left], map.get(s[left]) - 1);
            }
            if(map.get(s[left]) === 0){
                check--;
            }
            left++;
        }
    }

    return res;
};