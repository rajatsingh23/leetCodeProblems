// 128. Longest Consecutive Sequence
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //make set of nums
    //create an ans;
    //loop through the set
    //if not set has num - 1 then it means it is the start of the consecutive number
    //while set has it's greater number keep on looping and increasing the check
    //at the check to the ans;
    let ans = 0; 
    let set = new Set(nums)
    for(let num of set){
        if(!set.has(num - 1)){
            let currentNum = num;
            let check = 1;

            while(set.has(currentNum + 1)){
                currentNum++;
                check++;
            }
            ans = Math.max(ans, check)

        }
    }
    return ans;
};