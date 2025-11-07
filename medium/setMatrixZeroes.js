// 73. Set Matrix Zeroes
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

//solution

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //first make arr of zeroes while looping through the matrix and add to the zeroes
    //then just loop through the zeroes
    //first make the all the integer zero on the same row
    //then loop through the i while keeping the j same and make them also zero
    //if whole row is zero then just skip that row
    let zeroes = []
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j <matrix[i].length; j++){
            if(matrix[i][j] === 0){
                zeroes.push([i,j])
            }
        }
    }
    let setI = new Set()
    for(let index of zeroes){
        let [i, j] = index
        if(!setI.has(i)){
             matrix[i].fill(0);
             setI.add(i)
        }
        i = 0;
        while(i < matrix.length){
            matrix[i][j] = 0;
            i++;
        }
    }
};