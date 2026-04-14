// 1861. Rotating the Box
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n matrix of characters boxGrid representing a side-view of a box. Each cell of the box is one of the following:

// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

// It is guaranteed that each stone in boxGrid rests on an obstacle, another stone, or the bottom of the box.

// Return an n x m matrix representing the box after the rotation described above.

 

// Example 1:



// Input: boxGrid = [["#",".","#"]]
// Output: [["."],
//          ["#"],
//          ["#"]]
// Example 2:



// Input: boxGrid = [["#",".","*","."],
//               ["#","#","*","."]]
// Output: [["#","."],
//          ["#","#"],
//          ["*","*"],
//          [".","."]]
// Example 3:



// Input: boxGrid = [["#","#","*",".","*","."],
//               ["#","#","#","*",".","."],
//               ["#","#","#",".","#","."]]
// Output: [[".","#","#"],
//          [".","#","#"],
//          ["#","#","*"],
//          ["#","*","."],
//          ["#",".","*"],
//          ["#",".","."]]

//solution

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    //make an 2d mat mat;
    //loop through boxGrid;
    //make a stone variable;
    //if stone then stone++;
    //if obstacle; reverse the in the map and fill it;
    //reset stone to 0;
    //if last reverse in the map and fill it;
    let mat = Array.from({ length: boxGrid[0].length }, () => new Array(boxGrid.length).fill('.'));
    for(let i = 0; i < boxGrid.length; i++){
        let stone = 0;
        for(let j = 0; j < boxGrid[i].length; j++){
            let box = boxGrid[i][j]
            let row = j;
            if(box === '#') stone++;
            if(box === '*' || j === boxGrid[i].length - 1){
                if(box === '*'){
                    mat[j][mat[0].length - 1 - i] = '*'
                    row = j - 1;
                }
                while(stone > 0){
                    let col = mat[0].length - i - 1;
                    mat[row][col] = '#'
                    row--;
                    stone--;
                }

                stone = 0;
            }
        }
    }
    return mat;
};