// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]

// Explanation:

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:

// Input: words = ["omk"]

// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]

// Output: ["adsdf","sfd"]

 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 


//solution

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let firstRow = new RegExp(/[^qwertyuiop]/i)
    let secondRow = new RegExp(/[^asdfghjkl]/i)
    let thirdRow = new RegExp(/[^zxcvbnm]/i)
    let ansArr = []
    for(let i = 0; i <words.length; i++){
        if(!firstRow.test(words[i])){
            if(secondRow.test(words[i]) && thirdRow.test(words[0])){
                ansArr.push(words[i])
            }
        }else if(!secondRow.test(words[i])){
            if(firstRow.test(words[i]) && thirdRow.test(words[i])){
                ansArr.push(words[i])
            }
        }else if(!thirdRow.test(words[i])){
            if(secondRow.test(words[i]) && firstRow.test(words[i])){
                ansArr.push(words[i])
            }
        }
    }

    return ansArr;
};


//imporved version using hashmaps

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    //make three sets of each row
    //make an ans arr to be returned
    //loop through the words
    //if row1 has first ch loop through the ch if it has all the ch add that to answer
    let row1 = new Set('qwertyuiop')
    let row2 = new Set('asdafghjkl')
    let row3 = new Set('zxcvbnm')
    let ans = []
    for(let word of words){
        const ch = word.toLowerCase().split('')
        if(ch.every(x=> row1.has(x)) || ch.every(x=> row2.has(x)) || ch.every(x=> row3.has  (x))){
            ans.push(word)
        }
    }
    return ans;
};