// 1695. Maximum Erasure Value
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

// Return the maximum score you can get by erasing exactly one subarray.

// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

 

// Example 1:

// Input: nums = [4,2,4,5,6]
// Output: 17
// Explanation: The optimal subarray here is [2,4,5,6].
// Example 2:

// Input: nums = [5,2,1,2,5,2,1,2,5]
// Output: 8
// Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    //make a map;
    //make a left;
    //make  a score;
    //make a ans;
    //loop using right;
    //keep adding to the freq; increase score by nums[right];
    //while(right freq is greater than 1); decearese left's freq by one; and score -- left; left++;
    //ans max of ans and score;
    let map = new Map();
    let left = 0;
    let score = 0;
    let ans = 0;

    for(let right = 0; right < nums.length; right++){
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        score += nums[right];
        while(map.get(nums[right]) > 1){
            map.set(nums[left], map.get(nums[left]) - 1);
            score -= nums[left];
            left++;
        }

        ans = Math.max(ans, score);
    }

    return ans;
};