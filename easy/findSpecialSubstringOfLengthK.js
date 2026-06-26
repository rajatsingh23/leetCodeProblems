// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {boolean}
//  */
// var hasSpecialSubstring = function(s, k) {
//     let count = 0;
//     let first = s[0];
//     let start = 0;
//     for(let i = 1; i <= s.length - k; i++){
//         if(s[i] === first){
//             count++;
//             start = i;
//         }else{
//             first = s[i];
//             count = 0;
//             start = i;
//         }
//         if(count === k){
//             if(s[start - 1] !== first && s[i+1] !== first) return true;
//             count = 0;
//             first = s[i+1]
//         }
//         // let set = new Set(s.slice(i, i + k))

//         // if(set.size === 1){
//         //     if(s[i - 1] !== s[i] && s[i] !== s[i + k]) return true;
//         // }
//     }
//     return false;
// };

//solution

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    for(let i = 1; i <= s.length - k; i++){

        let set = new Set(s.slice(i, i + k))

        if(set.size === 1){
            if(s[i - 1] !== s[i] && s[i] !== s[i + k]) return true;
        }
    }
    return false;
};


//optimized solution
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {

    let count = 1;
    let start = 0;

    for (let i = 1; i <= s.length; i++) {

        if (i < s.length && s[i] === s[i - 1]) {
            count++;
        } else {

            // Current run is from start to i-1
            if (
                count === k &&
                (start === 0 || s[start - 1] !== s[start]) &&
                (i === s.length || s[i] !== s[start])
            ) {
                return true;
            }

            count = 1;
            start = i;
        }
    }

    return false;
};