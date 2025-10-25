// 229. Majority Element II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?

//solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    //make map
    //make a check of nums.length / 3 in math.floor
    //make an ans loop
    //loop through the map and if greater then check then push to answer and return the answer
    let map = new Map()
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let check = Math.floor(nums.length / 3);
    let ans = []
    for(let [key,value] of map){
        if(value > check){
            ans.push(key)
        }
    }
    return ans;
};