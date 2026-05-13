// 22. Generate Parentheses
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

//solution

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //let's approach using the backtracking;
    //create ans arr; res;
    //for n the ans arr length will be n * 2; because there's '(' and ')'
    //create a function named backtrack; in which will pass three variables, curr,open,close;
    //if curr length is n * 2; res.push(curr)return; found one answer;
    //if open is less then n; backtrack with curr + "(", open +1, close
    //if close is less then open; backtrack with curr + ")", open, close + 1;
    //at the end call the function backtrack('', 0, 0);
    //return ans;
    let res = [];

    function backtrack(curr, open, close){
        if(curr.length === n * 2){
            res.push(curr);
            return;
        }
        if(open < n){
            backtrack(curr + '(', open + 1, close)
        }
        if(close < open){
            backtrack(curr + ')', open, close + 1)
        }
    }
    backtrack('', 0, 0);
    return res;
};