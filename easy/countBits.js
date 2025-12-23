// 338. Counting Bits
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105

//solution



/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    //DP SOLUTION
    /**
        make a dp;
        iterate through the arr;
        right shift the i to remove the last bit;
        this will help find digit from the dp;
        check last bit of i using i & 1 if 1 will give 1 else 0;
        add both and add to dp;
        return dp;
     */
     let dp = Array(n+1).fill(0)
     for(let i = 1; i <=n; i++){
        dp[i] = dp[i >> 1] + (i & 1)
     }
     return dp;
};