// 2537. Count the Number of Good Subarrays
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1,1,1], k = 10
// Output: 1
// Explanation: The only good subarray is the array nums itself.
// Example 2:

// Input: nums = [3,1,4,3,2,2,4], k = 2
// Output: 4
// Explanation: There are 4 different good subarrays:
// - [3,1,4,3,2,2] that has 2 pairs.
// - [3,1,4,3,2,2,4] that has 3 pairs.
// - [1,4,3,2,2,4] that has 2 pairs.
// - [4,3,2,2,4] that has 2 pairs.
 

//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    //make a freq;
    //make a pairs;
    //make a left;
    //make a ans;
    //loop using right;
    //make a count;
    //add count to pairs;
    //change freq;
    //while pairs >= k, ans += num.length - right;
    //let leftcount = freq of left;
    //decrease freq of left;
    //pairs -= leftcount - 1;
    let map = new Map();
    let pairs = 0;
    let left = 0;
    let ans = 0;

    for(let right = 0; right < nums.length; right++){
        let count = map.get(nums[right]) || 0;
        pairs += count;
        map.set(nums[right], count + 1);

        while(pairs >= k){
            ans += nums.length - right;
            let leftCount = map.get(nums[left]);
            map.set(nums[left], leftCount - 1);
            pairs -= leftCount - 1;
            left++;
        }
    }

    return ans;
};