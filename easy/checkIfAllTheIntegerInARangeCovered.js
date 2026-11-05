// 1893. Check if All the Integers in a Range Are Covered
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

 

// Example 1:

// Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.
// Example 2:

// Input: ranges = [[1,10],[10,20]], left = 21, right = 21
// Output: false
// Explanation: 21 is not covered by any range.
 

// Constraints:

// 1 <= ranges.length <= 50
// 1 <= starti <= endi <= 50
// 1 <= left <= right <= 50

//solution

//My Brute-Force Version
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    //make set of ranges;
    //loop ranges;
    //keep adding the ranges;
    //if in set keep deleting;
    //if set is empty return true;
    //return false;
    let set = new Set();
    for(let i = left; i <= right; i++){
        set.add(i)
    }
    for(let range of ranges){
        for(let i = range[0]; i <= range[1]; i++){
            if(set.has(i)) set.delete(i)
        }
    }
    if(set.size === 0) return true;
    return false;
};