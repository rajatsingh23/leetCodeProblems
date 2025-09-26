// 2032. Two Out of Three
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:

// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.
 

// Constraints:

// 1 <= nums1.length, nums2.length, nums3.length <= 100
// 1 <= nums1[i], nums2[j], nums3[k] <= 100

//solution

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    // make an map, loop through the nums1, add to map but with only 1 value
    // loop through the next arrays, only if map has that key then increase that key by one,
    // if map value is greater than 1 just add it to the result. return the result
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let set3 = new Set(nums3)

    let ans = new Set()
    for(let value of set1){
        if(set2.has(value) || set3.has(value)){
            ans.add(value)
        }
    }

    for(let value of set2){
        if(set1.has(value) || set3.has(value)){
            ans.add(value)
        }
    }

    return Array.from(ans);
    
};