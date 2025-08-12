// 169. Majority Element
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = new Map()
    let check = nums.length / 2;
    for(let i = 0; i < nums.length; i++){
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1) 
    }
    let ans = 0;
    freq.forEach((value, key) =>{
        if(value > check){
            ans = key
        }
    })

    return ans;
};