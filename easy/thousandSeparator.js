// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

// Example 1:

// Input: n = 987
// Output: "987"
// Example 2:

// Input: n = 1234
// Output: "1.234"
 

// Constraints:

// 0 <= n <= 231 - 1

//solution

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = String(n)
    let size = n.length
    if(size < 4){
        return n
    }
    let count = 3;
    let ans = ''
    for(let i = n.length-1; i >= 0; i--){
        if(count === 0){
            ans =  n.charAt(i) + '.' + ans
            count = 2;
        }else{
        ans =  n.charAt(i) + ans  ;
        count--;
        }

    }
    return ans;
};