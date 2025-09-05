// 1496. Path Crossing
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

// Example 1:


// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:


// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.
 

// Constraints:

// 1 <= path.length <= 104
// path[i] is either 'N', 'S', 'E', or 'W'.

//solution
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    // north and south are on y, if north then y++, if south then y--, 
    // west and east are on x,if west then x--, if east then x++,
    // make set of initial '0,0', we will make a set because it's efficient when finding something in an set
    let x = 0;
    let y = 0;
    let check = new Set(['0, 0']);

    for(let i = 0; i < path.length; i++){
        if(path[i] === 'N') y++;
        if(path[i] === 'S') y--;
        if(path[i] === 'E') x++;
        if(path[i] === 'W') x--;

        const temp = `${x}, ${y}`
        if(check.has(temp)){
            return true;
        }else{
            check.add(temp)
        }
    }

    return false;

    
};