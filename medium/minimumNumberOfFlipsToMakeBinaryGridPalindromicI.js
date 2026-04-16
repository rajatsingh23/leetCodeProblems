// 3239. Minimum Number of Flips to Make Binary Grid Palindromic I
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n binary matrix grid.

// A row or column is considered palindromic if its values read the same forward and backward.

// You can flip any number of cells in grid from 0 to 1, or from 1 to 0.

// Return the minimum number of cells that need to be flipped to make either all rows palindromic or all columns palindromic.

 

// Example 1:

// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]

// Output: 2

// Explanation:



// Flipping the highlighted cells makes all the rows palindromic.

// Example 2:

// Input: grid = [[0,1],[0,1],[0,0]]

// Output: 1

// Explanation:



// Flipping the highlighted cell makes all the columns palindromic.

// Example 3:

// Input: grid = [[1],[0]]

// Output: 0

// Explanation:

// All rows are already palindromic.

 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m * n <= 2 * 105
// 0 <= grid[i][j] <= 1

//solution

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
    //make an row;
    //make a col;
    //loop through the grid;
    //use two pointer to find equal or not if not row++;
    //use two pointer to loop in col if not equal col++;
    //if both row === col return col;
    //if row is 0 return col;
    //if col is 0 return row;
    //return min of both;
    if(grid.length === 1 || grid[0].length === 1) return 0;
    let row = 0;
    let col = 0;
    for(let i = 0; i < grid.length; i++){
        let left = 0; 
        let right = grid[i].length - 1;
        while(left <= right){
            if(grid[i][left] !== grid[i][right]) row++;
            left++;
            right--;
        }
    }
    for(let i = 0; i < grid[0].length; i++){
        let left = 0;
        let right = grid.length - 1;
        while(left <= right){
            if(grid[left][i] !== grid[right][i]) col++;
            left++;
            right--;
        }
    }
    if(row === col) return col;
    return(Math.min(row, col))
};