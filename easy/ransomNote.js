// 383. Ransom Note
// Solved
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.



//solution

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 // two strings, lower case only, no empty string, different lengths
 // return boolean if the case matches or not
 // 'aa', 'aba' true;
 // 'aa', 'ab' false;
 // 'ca', 'abc' true;


var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){
        return false;
    }
    ans = true;
    let str = magazine.split('');
    
    for(let i = 0; i < ransomNote.length; i++){
        
        if(str.includes(ransomNote[i])){
            str.splice(str.indexOf(ransomNote[i]), 1, '0')
        }else{
            ans = false;
        }
    }
    return ans;
};