// 3591. Check if Any Element Has Prime Frequency
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums.

// Return true if the frequency of any element of the array is prime, otherwise, return false.

// The frequency of an element x is the number of times it occurs in the array.

// A prime number is a natural number greater than 1 with only two factors, 1 and itself.

 

// Example 1:

// Input: nums = [1,2,3,4,5,4]

// Output: true

// Explanation:

// 4 has a frequency of two, which is a prime number.

// Example 2:

// Input: nums = [1,2,3,4,5]

// Output: false

// Explanation:

// All elements have a frequency of one.

// Example 3:

// Input: nums = [2,2,2,4,4]

// Output: true

// Explanation:

// Both 2 and 4 have a prime frequency.

 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

//solution

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let map = new Map();

    // Count frequency of each number
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Helper function to check if a number is prime
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Check if any frequency is prime
    for (let freq of map.values()) {
        if (isPrime(freq)) return true;
    }

    return false;
};

// Example tests
console.log(checkPrimeFrequency([1,2,3,4,5,4])); // true
console.log(checkPrimeFrequency([1,2,3,4,5]));   // false
console.log(checkPrimeFrequency([2,2,2,4,4]));   // true
