// 557. Reverse Words in a String III
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

//solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //make arr of words in s;
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].split('').reverse()
        // for(let j = 0; j <arr[i].length; j++){
        //     let left = 0;
        //     let right = arr[i].length - 1;
        //     while(left < right){
        //         [temp[left],temp[right]] = [temp[right],temp[left]]
        //         left++;
        //         right--;
        //     }
        // }
        arr[i] = temp.join('');
    }
    return arr.join(' ')
};