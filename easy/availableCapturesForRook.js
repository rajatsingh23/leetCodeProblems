// You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented by '.'.

// A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in one move.

// Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.

// Return the number of pawns the white rook is attacking.

 

// Example 1:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]

// Output: 3

// Explanation:

// In this example, the rook is attacking all the pawns.

// Example 2:


// Input: board = [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]

// Output: 0

// Explanation:

// The bishops are blocking the rook from attacking any of the pawns.

// Example 3:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]

// Output: 3

// Explanation:

// The rook is attacking the pawns at positions b5, d6, and f5.

 

// Constraints:

// board.length == 8
// board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'

//solution

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    //iterate through the board, create for checks, for  up, down, left and right, if is p then count ++, return count
    let count = 0;
    for(let i = 0; i <board.length; i++){
        if(board[i].includes('R')){
            let check = i;
            let RookIndex = board[i].indexOf('R')
            //check for up
            while(check >= 1){
                check--;
                if(board[check][RookIndex] === 'B'){
                    break;
                }else if(board[check][RookIndex] === 'p'){
                    count++;
                    break;
                }
            }
            check = board[i].indexOf('R');

            //check for left
            while(check >= 0){
                check--;
                if(board[i][check] === 'B'){
                    break;
                }else if(board[i][check] === 'p'){
                    count++;
                    break;
                }
            }
            check = i;

            //check for down
            while(check < board.length-1){
                check++;
                if(board[check][RookIndex] === 'B'){
                    break;
                }else if(board[check][RookIndex] === "p"){
                    count++;
                    break;
                }
            }
            check = board[i].indexOf('R')
            //check for right
            while(check < board.length){
                check++;
                if(board[i][check] === 'B'){
                    break;
                }else if(board[i][check] === 'p'){
                    count++;
                    break;
                }
            }
        } 
    }

    return count;
};