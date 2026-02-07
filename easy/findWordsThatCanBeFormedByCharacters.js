// 1160. Find Words That Can Be Formed by Characters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.

//solution

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    //arr of strings; char;
    //['cat', 'bt', 'hat', 'tree'] , 'atach'
    //output : - cat, hat  3 + 3 => 6;
    //make a ans;
    //only strs, everything lowerCase;
    //length of the words made out of the character;

    //map of the chars; loop in the words arr, make map of word; while make the map;
    //if that thing is not in the charsMap; break; if it is greater than charsMap we will break; the condition;
    //add to ans; 
    let ans = 0;
    let charsMap = new Map();
    for(let ch of chars){
        charsMap.set(ch, (charsMap.get(ch) || 0 ) + 1);
    }

    for(let word of words){
        let wordMap = new Map()
        let check = true;
        for(let ch of word){
            wordMap.set(ch, (wordMap.get(ch) || 0) + 1);
            if(!charsMap.has(ch) || wordMap.get(ch) > charsMap.get(ch)){
                check = false;
                break;
            }
            
        }
        if(check) ans += word.length;
    }
    return ans;
};