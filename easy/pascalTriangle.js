// 118. Pascal's Triangle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

//solution

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //let an answer of [] make a while loop for numRows. if have previous arr then add with number else add with 0, 
    let ans = []

    for(let i = 0; i < numRows; i++){
        let row = []

        for(let j = 0; j <= i; j++){
            if(j=== 0 || j === i){
                row.push(1)
            }else{
                row.push(ans[i-1][j-1] + ans[i-1][j])
            }
        }
        ans.push(row)
    }

    return ans
};