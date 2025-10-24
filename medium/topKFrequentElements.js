// 347. Top K Frequent Elements
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //make the map
    // sort the map based on the value
    // return the answer of key of the map till k
    let map = new Map()
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let sortMap = [...map.entries()]
    sortMap.sort((a,b) => b[1] - a[1])
    let ans = []
    for(let i = 0; i < k; i++){
        ans.push(sortMap[i][0])
    }
    return ans;
};