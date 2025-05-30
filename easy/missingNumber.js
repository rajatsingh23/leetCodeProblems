// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
 

 

 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.


//solution


// Array of integers, not empty, no negative numbers, not sorted array, always start from 0
// We have to return missing number
// [0,1,3] => 2
//[0,1,2,4] => 3


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(!nums.includes(0)){
        return 0
    }
    let n = Math.max(...nums)
    let sum = n * (n+1) / 2
    let numsSum = nums.reduce((a,b) => a + b, 0)
    let ansSum = sum - numsSum
    if(ansSum === 0){
        return nums.length
    }    
    return ansSum
};