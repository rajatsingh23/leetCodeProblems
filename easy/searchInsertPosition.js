// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


//solution


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//arr, int, not empty, int can be -ve, always contain integer, they will be whole numbers, ascending order, non contigeous arr
//return int of the index where the number should be
//[1,2,4,5], target is 3; output -> 2
//[1,2,3,4,5], target is 4: output -> 3
// [1,2,3,6,7,8] target is 9: output -> 6
// [1,2,3,4,5] target is 0: output -> 0

var searchInsert = function(nums, target) {
    //if nums.include(target)
    // run a foor loop if nums[i] < target && nums[i+1] > target
    // if it reaches end we will just return the i+1
    
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    for(let i = 0; i < nums.length; i++){
        if(i === nums.length - 1){
            if(nums[i] > target){
                return 0;
            }
            return i +1
        }
        if(nums[i] < target && nums[i+1] > target){
            return i+1
        }
    }
};


console.log(searchInsert([1,2,4,5], 3), '2')
console.log(searchInsert([1,2,3,4,5], 4), '3')
console.log(searchInsert([1,2,3,6,7,8], 9), '6')
console.log(searchInsert([1,2,3,4,5], 0), '0')

