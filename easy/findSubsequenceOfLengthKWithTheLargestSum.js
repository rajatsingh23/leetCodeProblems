// 2099. Find Subsequence of Length K With the Largest Sum
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
// Example 2:

// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation: 
// The subsequence has the largest sum of -1 + 3 + 4 = 6.
// Example 3:

// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7. 
// Another possible subsequence is [4, 3].
 

// Constraints:

// 1 <= nums.length <= 1000
// -105 <= nums[i] <= 105
// 1 <= k <= nums.length

//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    //make an arr with value and index
    //sort the arr by value
    //slice with k
    //sort by index
    //return arr;
    let arr =  nums.map((x, i) => [x, i])
    arr.sort((a,b) => b[0] - a[0] || a[1] - b[1])
    let selected = arr.slice(0, k)
    selected.sort((a,b) => a[1] - b[1])
    return selected.map((x) => x[0])

};