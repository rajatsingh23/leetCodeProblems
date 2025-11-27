// 2133. Check if Every Row and Column Contains All Numbers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

// Example 1:


// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.
// Example 2:


// Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
// Output: false
// Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
// Hence, we return false.
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 100
// 1 <= matrix[i][j] <= n

//solution

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    //make a set
    //check if size of set is of n
    //if not return false;
    //return true;
    let n = matrix.length;
    for(let i = 0; i < matrix.length; i++){
        let set = new Set()
        for(let num of matrix[i]){
            set.add(num)
        }
        if(set.size !== n) return false;
        set.clear();
        for(let j = 0; j < matrix.length; j++){
            set.add(matrix[j][i])
        }
        if(set.size !== n) return false;
    }
    return true;
};