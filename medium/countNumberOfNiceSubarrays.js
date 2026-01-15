// 1248. Count Number of Nice Subarrays
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

 

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16
 

// Constraints:

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length
 


//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    //make a function of atmost(x);
    //in that function make left, res, odd and loop through nums;
    //if odd odd++;
    //while odd is greater than x;
    //keep odd-- left++;
    //res = res+ right - left + 1;
    //return - of k and k - 1;

    function atMost(x){
        let left = 0; 
        let odd = 0;
        let res = 0;
        for(let right = 0; right < nums.length; right++){
            if(nums[right] % 2) odd++;

            while(odd > x){
                if(nums[left] % 2) odd--;
                left++;
            }

            res += right - left + 1;
        }
        return res;
    }

    return atMost(k) - atMost(k-1)
};