/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    //make a left;
    //make an ans;
    //make an map for zeros;
    //if zero are 2; ans = math.max(ans, right - left - 1); if length is last(right - left)
    //while(freq is 2) keep left++;

    let left = 0;
    let ans = 0;
    let map = 0;

    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0){
            map++;
        }
        if(map === 2){
            ans = Math.max(ans, right - left - 1)
        }else if(right === nums.length - 1){
            ans = Math.max(ans, right - left)
        }

        while(map === 2){
            if(nums[left] === 0){
                map--
            }
            left++;
        }
    }

    if(map === 0) return nums.length - 1;

    return ans;

};