// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    if(nums.length === 1) return nums[0];
    nums.sort((a,b) => a - b);
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(i === 0){
            if(nums[0] !== nums[1]){
                count = count + nums[i]
            }
        }else if(i === nums.length - 1){
            if(nums[i] !== nums[i-1]){
                count = count + nums[i]
            }
        }else{
            if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]){
                count += nums[i]
            }
        }
    }
    return count;
};