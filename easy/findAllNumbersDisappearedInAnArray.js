// 448. Find All Numbers Disappeared in an Array
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

//solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //create set of nums
    //create an ans arr
    //loop through nums
    //if set don't have num +  1 add num + 1 to the ans;
    let set = new Set(nums)
    let ans = []
    let max = nums.length;
    for(let temp = 1; temp <= max; temp++){
        if(!set.has(temp)){
            ans.push(temp)
        }
    }

    return ans;
};