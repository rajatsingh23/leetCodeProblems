// 830. Positions of Large Groups
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

 

// Example 1:

// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.
// Example 2:

// Input: s = "abc"
// Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.
// Example 3:

// Input: s = "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".
 

// Constraints:

// 1 <= s.length <= 1000
// s contains lowercase English letters only.

//solution

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    //Make an integer called check to check if it's greater than 3,
    // loop through the arr, if next is same as first then check++ and keep check++, if check is greater then 
    // 3 then add the start index and last index. make an temp start index in the loop itself,
    // when added or new then change temp to the new i and check to 0
    let check = 1;
    let ans = []
    for(let i = 0; i < s.length; i++){
        let temp = i;
        while(s[i] === s[i+1]){
            check++;
            i++;
        }
        if(check>2){
            ans.push([temp, i])
        }
        check = 1;
    }

    return ans
};