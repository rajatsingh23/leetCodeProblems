// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

// Example 1:

// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
// Example 2:

// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
// Example 3:

// Input: coordinates = "c7"
// Output: false
 

// Constraints:

// coordinates.length == 2
// 'a' <= coordinates[0] <= 'h'
// '1' <= coordinates[1] <= '8'

//solution

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    switch(coordinates) {
        case 'a1':
            return false;
            break;
        case 'a2':
            return true;
            break;
        case 'a3':
            return false;
            break;
        case 'a4':
            return true;
            break;
        case 'a5':
            return false;
            break;
        case 'a6':
            return true;
            break;
        case 'a7':
            return false;
            break;
        case 'a8':
            return true;
            break;
        case 'b2':
            return false;
            break;
        case 'b1':
            return true;
            break;
        case 'b4':
            return false;
            break;
        case 'b3':
            return true;
            break;
        case 'b6':
            return false;
            break;
        case 'b5':
            return true;
            break;
        case 'b8':
            return false;
            break;
        case 'b7':
            return true;
            break;
        case 'c1':
            return false;
            break;
        case 'c2':
            return true;
            break;
        case 'c3':
            return false;
            break;
        case 'c4':
            return true;
            break;
        case 'c5':
            return false;
            break;
        case 'c6':
            return true;
            break;
        case 'c7':
            return false;
            break;
        case 'c8':
            return true;
            break;
        case 'e1':
            return false;
            break;
        case 'e2':
            return true;
            break;
        case 'e3':
            return false;
            break;
        case 'e4':
            return true;
            break;
        case 'e5':
            return false;
            break;
        case 'e6':
            return true;
            break;
        case 'e7':
            return false;
            break;
        case 'e8':
            return true;
            break;
        case 'g1':
            return false;
            break;
        case 'g2':
            return true;
            break;
        case 'g3':
            return false;
            break;
        case 'g4':
            return true;
            break;
        case 'g5':
            return false;
            break;
        case 'g6':
            return true;
            break;
        case 'g7':
            return false;
            break;
        case 'g8':
            return true;
            break;
        case 'd2':
            return false;
            break;
        case 'd1':
            return true;
            break;
        case 'd4':
            return false;
            break;
        case 'd3':
            return true;
            break;
        case 'd6':
            return false;
            break;
        case 'd8':
            return false;
            break;
        case 'd7':
            return true;
            break;
        case 'f2':
            return false;
            break;
        case 'f1':
            return true;
            break;
        case 'f4':
            return false;
            break;
        case 'f3':
            return true;
            break;
        case 'f6':
            return false;
            break;
        case 'f8':
            return false;
            break;
        case 'f7':
            return true;
            break;
        case 'h2':
            return false;
            break;
        case 'h1':
            return true;
            break;
        case 'h4':
            return false;
            break;
        case 'h3':
            return true;
            break;
        case 'h6':
            return false;
            break;
        case 'h5':
            return true;
            break;
        case 'f5':
            return true;
            break;
        case 'd5':
            return true;
            break;
        case 'h8':
            return false;
            break;
        case 'h7':
            return true;
            break;
    }
};