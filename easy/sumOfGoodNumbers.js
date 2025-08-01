// 3452. Sum of Good Numbers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k, an element nums[i] is considered good if it is strictly greater than the elements at indices i - k and i + k (if those indices exist). If neither of these indices exists, nums[i] is still considered good.

// Return the sum of all the good elements in the array.

 

// Example 1:

// Input: nums = [1,3,2,1,5,4], k = 2

// Output: 12

// Explanation:

// The good numbers are nums[1] = 3, nums[4] = 5, and nums[5] = 4 because they are strictly greater than the numbers at indices i - k and i + k.

// Example 2:

// Input: nums = [2,1], k = 1

// Output: 2

// Explanation:

// The only good number is nums[0] = 2 because it is strictly greater than nums[1].

 

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] <= 1000
// 1 <= k <= floor(nums.length / 2)


//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    //loop through the arr, let initial -infinity, check the ans and return count
    let count = 0;
    for(let i = 0; i< nums.length; i++){
        let check1 = -Infinity
        let check2 = -Infinity
        if(i-k >= 0){
            check1 = nums[i-k]
        }
        if(i+k < nums.length){
            check2 = nums[i+k]
        }
        if(check1 < nums[i] && check2 < nums[i]){
           count = count + nums[i]
        }
    }

    return count;
};