// 198. House Robber
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //solve using the dp;
    //we will make the dp array of lenght nums.length
    //store dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
    //loop through the nums;
    //we will store dp[i] = Math.max(dp[i-1], nums[i] + dp[i - 2]);
    //this will skip the element if is less than last; and we keep the max;
    //at the end return the last dp[dp.length - 1];\
    if(nums.length === 1) return nums[0];
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(dp[i -1], nums[i] + dp[i -2]);
    }
    return dp[dp.length -1]
};