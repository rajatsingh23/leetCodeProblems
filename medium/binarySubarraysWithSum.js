// 930. Binary Subarrays With Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// nums[i] is either 0 or 1.
// 0 <= goal <= nums.length

//solution

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    //make a left;
    //make a ans;
    //make a count;
    //loop using right;
    //count += nums[right];
    //while count > goal left++;, count -= nums[left];
    //if count === goal; ans++;
    function atMost(nums, goal){
        let left = 0;
        let ans = 0;
        let count = 0;

        for(let right = 0; right < nums.length; right++){
            if(goal < 0) return 0;
            count += nums[right];
            while(count > goal){
                count -= nums[left];
                left++;
            }

            ans += right - left + 1;
        }
        return ans;
    }
    

    return atMost(nums, goal) - atMost(nums, goal - 1)
};