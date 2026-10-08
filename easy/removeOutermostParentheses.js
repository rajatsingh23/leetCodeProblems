// 1021. Remove Outermost Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '(' or ')'.
// s is a valid parentheses string.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = '';
    let depth = 0;

    for (let ch of s) {
        if (ch === '(') {
            if (depth > 0) ans += ch;
            depth++;
        } else {
            depth--;
            if (depth > 0) ans += ch;
        }
    }

    return ans;
};

//myversion

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = '';
    let count = 0;
    let initial = 0;
    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        if(ch == "("){
            count++;
        }else{
            count--;
        }
        if(count === 0){
            ans += s.slice(initial + 1, i)
            initial = i + 1;
        }
    }
    return ans;
};