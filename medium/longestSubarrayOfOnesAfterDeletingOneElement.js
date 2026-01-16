// 1493. Longest Subarray of 1's After Deleting One Element
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    //make a left;
    //make an ans;
    //make an map for zeros;
    //if zero are 2; ans = math.max(ans, right - left - 1); if length is last(right - left)
    //while(freq is 2) keep left++;

    let left = 0;
    let ans = 0;
    let map = new Map();

    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0){
            map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        }
        if(map.get(nums[right]) === 2){
            ans = Math.max(ans, right - left - 1)
        }else if(right === nums.length - 1){
            ans = Math.max(ans, right - left)
        }

        while(map.get(nums[right]) === 2){
            if(nums[left] === 0){
                map.set(nums[right], map.get(nums[right]) - 1)
            }
            left++;
        }
    }

    if(!map.get(0)) return nums.length - 1;

    return ans;

};