// 1232. Check If It Is a Straight Line
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.
 
//solution

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    //find the slope;
    //if equal than continue else return false;
    let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] -coordinates[0][0]);
    for(let i = 1 ; i < coordinates.length; i++){
        let m = (coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] -coordinates[i-1][0]);
        if(m === -Infinity) m = Infinity;
        if(m !== slope) return false;
    }

    return true;
};