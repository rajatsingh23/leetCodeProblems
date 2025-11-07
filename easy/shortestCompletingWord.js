// 748. Shortest Completing Word
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

 

// Example 1:

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.
// Example 2:

// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
 

// Constraints:

// 1 <= licensePlate.length <= 7
// licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 15
// words[i] consists of lower case English letters.

//solution

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    //first we will make the map from license plat
    //we will make a check set with all the letters of english alphabets
    //loop through licensePlate is lowercase of ch is in check then add it to the map
    //then loop through the words
    //loop through ch of word
    //make the map of the word
    //loop through the map, check if original map has the new key ans value is same
    //make check down in th loop, if check is same as original map size then add it to the ans
    //if ans is '' then simply add else check which is shorter or longer
    let map = new Map()
    let seen = new Set('abcdefghijklmnopqrstuvwxyz')
    for(let ch of licensePlate){
        if(seen.has(ch.toLowerCase())){
            map.set(ch.toLowerCase(), (map.get(ch.toLowerCase()) || 0) + 1)
        }
    }
    let ans = ''
    for(let word of words){
        let wordMap = new Map()
        for(let ch of word){
            wordMap.set(ch, (wordMap.get(ch) || 0) + 1)
        }
        let check = 0;
        for(let [key, value] of wordMap){
            if(map.has(key) && map.get(key) <= value){
                check++;
            }
            
            if(check === map.size){
                if(ans === '' || ans.length > word.length){
                    ans = word;
                }
                break;
            }
        }
    }
    return ans;
};