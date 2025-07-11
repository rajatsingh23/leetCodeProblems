// 16. 3Sum Closest
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

//solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // sort the arr, if sum > target and sum > currentSum right--, if sum < target and sum < currentSum left++; avoid duplicates, find the difference and then put the ans

    let ans = target;
    nums.sort((a,b) => a-b)
    let closestSum = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length-2; i++){
        

        let left = i+1;
        let right = nums.length - 1;

        while(right > left){
            let sum = nums[i] + nums[left] + nums[right];
            
            if(Math.abs(sum - target) < Math.abs(closestSum - target)){
                closestSum = sum;
            }
            if(sum > target){
                right--;
            }else if(sum < target){
                left++;
            }else{
                return sum
            }
        }
    }
    return closestSum;
};