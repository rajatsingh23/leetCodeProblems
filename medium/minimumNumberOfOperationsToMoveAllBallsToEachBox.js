// 1769. Minimum Number of Operations to Move All Balls to Each Box
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

 

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]
 

// Constraints:

// n == boxes.length
// 1 <= n <= 2000
// boxes[i] is either '0' or '1'.1769. Minimum Number of Operations to Move All Balls to Each Box
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

 

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]
 

// Constraints:

// n == boxes.length
// 1 <= n <= 2000
// boxes[i] is either '0' or '1'.

//solution

// Idea:
// - Accumulate the balls while we go and each new ball in order to drag it further it takes one move for each ball, so we increase each step we take furher is increased by the number of balls we have at current moment  

// Steps:
// 1. Go from left to right
// 2. Go from right to left
// 3. Return result

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const res = new Array(n).fill(0);
    
    let balls = 0;
    let moves = 0;

    for (let i = 0; i < n; i++) {
        res[i] = moves;
        balls += Number(boxes[i]);
        moves += balls;
    };

    balls = moves = 0;
    for (let i = n - 1; i >= 0; i--) {
        res[i] += moves;
        balls += Number(boxes[i]);
        moves += balls;
    };

    return res
};