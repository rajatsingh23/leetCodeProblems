// 525. Contiguous Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Example 3:

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map()
    map.set(0, -1)
    let sum = 0;
    let ans = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            sum += -1
        }else{
            sum+= 1
        }
        if(map.has(sum)){
            ans = Math.max(ans, i - map.get(sum))
        }else{
            map.set(sum, i)
        }
    }
    return ans;
};