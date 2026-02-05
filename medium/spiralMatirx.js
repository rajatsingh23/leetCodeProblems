// 54. Spiral Matrix
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

//solution

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(mat) {
    //make a top; 0;
    //make a bottom; mat.length - 1;
    //make a right; mat[0].length - 1;
    //make a left; 0;
    //make a ans;
    //using a while loop, loop till top <= bottom && right <= left;
    //top
    //for(let i = 0; i < mat[top].length; i++) ans.push(mat[top][i]);
    //right
    //for(let i = top + 1; i < mat.length; i++) ans.push(mat[i][right]);
    //bottom
    //for(let i = right - 1; i > 0; i--) ans.push(mat[bottom][i]);
    //left
    //for(let i = bottom + 1; i > top; i--) ans.push(mat[i][left]);
    //return ans;
    let top = 0;
    let bottom = mat.length - 1;
    let left = 0;
    let right = mat[0].length - 1;
    let ans = [];
    while(top <= bottom && left <= right){
        //top;
        for(let i = left; i <= right; i++){
            ans.push(mat[top][i])
        }
        //right;
        for(let i = top + 1; i <= bottom; i++){
            ans.push(mat[i][right])
        }
        //bottom;
        for(let i = right - 1; i >= left; i--){
            if(top === bottom) break;
            ans.push(mat[bottom][i]);
        }
        //left;
        for(let i = bottom - 1; i > top; i--){
            if(left === right) break;
            ans.push(mat[i][left]);
        }
        top++;
        bottom--;
        left++;
        right--;
    }

    return ans;
    
};