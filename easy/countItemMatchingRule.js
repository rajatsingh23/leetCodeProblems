// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:

// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
 

// Constraints:

// 1 <= items.length <= 104
// 1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
// ruleKey is equal to either "type", "color", or "name".
// All strings consist only of lowercase letters.

//solution

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

 // arr, one string, one string, non empty, everything lowercase, arr of same order, always be arr of 3
 // return int of how many elements match
 // [['phone', 'blue', 'pixel']], type, phone => 1
var countMatches = function(items, ruleKey, ruleValue) {
    // iterate throught the arr, if rulekey is type check for 0, color check for 1, name check for 2 increment the count, return the count
    let count = 0;
    items.forEach((x) => {
        if(ruleKey === 'type'){
            if(x[0] === ruleValue){
                count++;
            }
        }else if(ruleKey === 'color'){
            if(x[1] === ruleValue){
                count++;
            }
        }else{
            if(x[2] === ruleValue){
                count++;
            }
        }
    })

    return count;
};