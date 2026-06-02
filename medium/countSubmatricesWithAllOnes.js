// 1504. Count Submatrices With All Ones
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an m x n binary matrix mat, return the number of submatrices that have all ones.

 

// Example 1:


// Input: mat = [[1,0,1],[1,1,0],[1,1,0]]
// Output: 13
// Explanation: 
// There are 6 rectangles of side 1x1.
// There are 2 rectangles of side 1x2.
// There are 3 rectangles of side 2x1.
// There is 1 rectangle of side 2x2. 
// There is 1 rectangle of side 3x1.
// Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
// Example 2:


// Input: mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
// Output: 24
// Explanation: 
// There are 8 rectangles of side 1x1.
// There are 5 rectangles of side 1x2.
// There are 2 rectangles of side 1x3. 
// There are 4 rectangles of side 2x1.
// There are 2 rectangles of side 2x2. 
// There are 2 rectangles of side 3x1. 
// There is 1 rectangle of side 3x2. 
// Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.
 

// Constraints:

// 1 <= m, n <= 150
// mat[i][j] is either 0 or 1.

//solution

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let ans = 0;
    function oneDArrayCount(arr){
        let cons = 0;
        let subCount = 0;
        for(let num of arr){
            if(num === 0){
                cons = 0;
            }else{
                cons++;
            }
            subCount += cons;
        }
        return subCount;
    }

    for(let startRow = 0; startRow < m; startRow++){
        let arr = new Array(n).fill(1);
        for(let endRow  = startRow; endRow < m; endRow++){
            for(let col = 0; col < n; col++){
                arr[col] = arr[col] & mat[endRow][col];
            }
            ans += oneDArrayCount(arr);
        }
    }
    return ans;
};