// 3208. Alternating Groups II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:

// colors[i] == 0 means that tile i is red.
// colors[i] == 1 means that tile i is blue.
// An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).

// Return the number of alternating groups.

// Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

 

// Example 1:

// Input: colors = [0,1,0,1,0], k = 3

// Output: 3

// Explanation:



// Alternating groups:



// Example 2:

// Input: colors = [0,1,0,0,1,0,1], k = 6

// Output: 2

// Explanation:



// Alternating groups:



// Example 3:

// Input: colors = [1,1,0,1], k = 4

// Output: 0

// Explanation:



 

// Constraints:

// 3 <= colors.length <= 105
// 0 <= colors[i] <= 1
// 3 <= k <= colors.length

//solution


/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    //make an arr by concatnate colors;
    //make a left;
    //make a ans;
    //make a count;
    //loop using right = 1;
    //if right is same as right - 1; left = right break;
    //while(count > k) left++; 
    //ans will be max of ans, right - left + 1;
    let arr = colors.concat(colors);
    let left = 0;
    let ans = 0;

    for(let right = 1; right < arr.length; right++){
        if(arr[right] === arr[right - 1]){
            count = 0;
            left = right;
            continue;
        }

        while(right - left + 1 > k){
            left++;
        }

        if(right - left + 1 === k && left < colors.length){
            ans++;
        }
    }

    return ans;
};