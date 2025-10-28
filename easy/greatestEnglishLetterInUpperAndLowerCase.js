// 2309. Greatest English Letter in Upper and Lower Case
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

 

// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.
// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
// Example 3:

// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase and uppercase English letters.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    // make it's arr and sort it. 
    //reverse the  arr, make a seen set
    //loop through the set if it has lower case of that letter then return else return ''
    let arr = s.split('').sort().reverse()
    let seen = new Set()

    for(let ch of arr){
        seen.add(ch)
    }

    for(let value of seen){
        if(value === value.toUpperCase()) continue;
        if(seen.has(value.toUpperCase())){
            return value.toUpperCase()
        }
    }

    return ''
}