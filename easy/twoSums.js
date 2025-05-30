// 1. Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//solution


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // arr, int, arr isNotEmpty, no target is inside arr, they can be neg num ok, target will be  negative, 
 // i have to return an arr of  index of numbers that when sum up give nums, target.
 // [3,2,4], 6 => [1,2]
 var twoSum = function(nums, target) {
    //return arr 
    // for loop the arr twice 
    //push the index to the arr and will return the arr
    let arr = []
    for(let i = 0; i <nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                arr.push(i)
                arr.push(j)
            }
        }
    }
    return arr;
};