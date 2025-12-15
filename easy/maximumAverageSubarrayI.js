// 643. Maximum Average Subarray I
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //make a variable maxAvg;
    //make a variable windowAvg;
    //loop through nums;
    //keep adding the avg to the windowAvg;
    //if I is >= k -1
    //check what is max;
    //remove first element;
    let maxAvg = -Infinity;
    let windowSum = 0;
    for(let i = 0; i < nums.length; i++){
        windowSum += nums[i]
        if(i >= k - 1){
            let windowAvg = windowSum / k;
            maxAvg = Math.max(maxAvg, windowAvg)
            windowSum -= nums[i - (k - 1)]
        }
    }

    return maxAvg;
};