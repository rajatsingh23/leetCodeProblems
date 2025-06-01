// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


//solution

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// arr, non empty, can be negative numbers,
// return an arr with 0's at the end of the arr
// [2,3,1,0,5,0,23] => [2,3,1,5,23,0,0]
// [0,0,1] => [1,0,0]

var moveZeroes = function(nums) {
    //find 0 and keep swaping till reach the end of the arr. we loop over the arr, choose the one element using splice and unshift if it is not 0 and push it if it is 0
    let end = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            end++
        }
    }
    let i = 0;
    while(i < nums.length - end){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }else{
            i++
        }
    }

    return nums;
};