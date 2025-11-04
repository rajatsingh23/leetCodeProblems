// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let mapS = new Map()
    let mapT = new Map()
    for(let i = 0; i < s.length; i++){
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1)
        mapT.set(t[i], (mapT.get(t[i]) || 0) + 1)
    }
    if(mapS.size !== mapT.size) return false;
    for(let [key, value] of mapS){
        if(!mapT.has(key)) return false;
        if(mapT.get(key) !== value) return false;
    }
    return true;
};