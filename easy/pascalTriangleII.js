// 119. Pascal's Triangle II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space

//solution

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    //make an arr;
    //if i is 0 or last push i
    //else push 0 and i;
    let arr = []
    let temp = []
    for(let i = 0; i <= rowIndex; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                temp.push(1)
            }else{
                temp.push(arr[i-1][j] + arr[i-1][j-1])
            }
        }
        arr.push(temp)
        temp = []
    }

    return arr[rowIndex]
};