// 3127. Make a Square with the Same Color
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 2D matrix grid of size 3 x 3 consisting only of characters 'B' and 'W'. Character 'W' represents the white color, and character 'B' represents the black color.

// Your task is to change the color of at most one cell so that the matrix has a 2 x 2 square where all cells are of the same color.

// Return true if it is possible to create a 2 x 2 square of the same color, otherwise, return false.

 

// Example 1:

 
 
 
 
 
 
 
 
 
// Input: grid = [["B","W","B"],["B","W","W"],["B","W","B"]]

// Output: true

// Explanation:

// It can be done by changing the color of the grid[0][2].

// Example 2:

 
 
 
 
 
 
 
 
 
// Input: grid = [["B","W","B"],["W","B","W"],["B","W","B"]]

// Output: false

// Explanation:

// It cannot be done by changing at most one cell.

// Example 3:

 
 
 
 
 
 
 
 
 
// Input: grid = [["B","W","B"],["B","W","W"],["B","W","W"]]

// Output: true

// Explanation:

// The grid already contains a 2 x 2 square of the same color.

 

// Constraints:

// grid.length == 3
// grid[i].length == 3
// grid[i][j] is either 'W' or 'B'.

//solution

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    //loop through the grid, see if one is different from another, if yes break and return true;

    let ans = false;

    for(let i = 0; i < grid.length - 1; i++){


        let temp1 = grid[i][0]
        let temp2 = grid[i][1]
        let temp3 = grid[i+1][0]
        let temp4 = grid[i+1][1]
        
        let temp5 = grid[i][2]
        let temp6 = grid[i+1][2]
        let check = ((temp1 !== temp2) && (temp1 !== temp3) && (temp1 !== temp4)) || ((temp2 !== temp1) && (temp2 !== temp3) && (temp2 !== temp4)) || ((temp3 !== temp2) && (temp1 !== temp3) && (temp3 !== temp4)) || ((temp4 !== temp2) && (temp4 !== temp3) && (temp1 !== temp4))

        let check2 = ((temp2 !== temp5) && (temp2 !== temp4) && (temp2 !== temp6)) || ((temp5 !== temp2) && (temp5 !== temp4) && (temp5 !== temp6)) || ((temp4 !== temp2) && (temp4 !== temp5) && (temp4 !== temp6)) || ((temp6 !== temp2) && (temp6 !== temp5) && (temp6 !== temp4))

        let equalCheck = ((temp1 === temp2) && (temp1 === temp3) && (temp1 === temp4)) || ((temp2 === temp5) && (temp2 === temp4) && (temp2 === temp6))

    if(check || check2 || equalCheck){
        ans = true; 
        break;
    }

    }

    return ans
};