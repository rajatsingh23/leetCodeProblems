// 594. Longest Harmonious Subsequence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.

 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
   // sort the nums
   //make the map
   //make an prevKey variable
   //make an prevValue variable
   //make an ans variable
   //loop through the map if key - prevKey === 1, add prevValue + value to ans if it is greater than ans
   let seen = new Set(nums)
   let map = new Map()
   for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
   }

   let ans = 0;
   for(let [key, value] of map){
        if(seen.has(key - 1)){
            ans = Math.max(value + map.get(key - 1), ans)
        }
   }


   return ans;
   
};