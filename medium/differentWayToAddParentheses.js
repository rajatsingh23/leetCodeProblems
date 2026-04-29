// 241. Different Ways to Add Parentheses
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

 

// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2
// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10
 

// Constraints:

// 1 <= expression.length <= 20
// expression consists of digits and the operator '+', '-', and '*'.
// All the integer values in the input expression are in the range [0, 99].
// The integer values in the input expression do not have a leading '-' or '+' denoting the sign.

//solution

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    //use recursion and memoization to solve this;
    //create a function to call the code;
    //check if memo has it if does return memo;
    //create a res = [];
    //using for loop loop in expr;
    //if(ch is operator) make a left and right;
    //for l in left for r in right; if operator operate;
    //if res.length; is 0; push(Number(expr));
    //memo.set(expr, res);
    //return res;
    let memo = new Map();
    function solve(expr){
        if(memo.has(expr)) return memo.get(expr);
        let res = [];
        for(let i = 0; i < expr.length; i++){
            let ch = expr[i];
            if(ch === '-' || ch === '+' || ch === '*'){
                let left = solve(expr.slice(0, i));
                let right = solve(expr.slice(i+1));
                for(let l of left){
                    for(let r of right){
                        if(ch === '-'){
                            res.push(l - r);
                        }else if(ch === '+'){
                            res.push(l + r)
                        }else{
                            res.push(l * r)
                        }
                    }
                }
            }
        }
        if(res.length === 0){
            res.push(Number(expr))
        }
        memo.set(expr, res);
        return res;
    }

    return solve(expression)
};