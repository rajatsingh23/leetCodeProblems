// 771. Jewels and Stones
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//solution

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // create a map, compare the map, count , return the count
    let freq = {}
    let i = 0;
    let count = 0;
    while(i < stones.length){
        let a = stones.charAt(i)
        freq[a] = (freq[a] || 0) + 1
        i++;
    }
    i = 0;
    while(i < jewels.length){
        let b = jewels.charAt(i)
        count = (freq[b] || 0) + count
        i++;
    }

    return count;
};