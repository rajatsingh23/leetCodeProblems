/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    //make a counter right;
    //make a set of nums inside nums;
    //make a windowAns ;
    //loop through nums using left;
    //if set size is 0 windowAns++;
    //if loop end move forward;


    //bruteforce;
    // let windowAns = 0;
    // let set = new Set(nums)
    // for(let l = 0; l < nums.length; l++){
    //     let temp = new Set();
    //     if(set.size === 1){
    //         return (nums.length *(nums.length + 1)) / 2
    //     }
    //     for(let r = l; r < nums.length; r++){
    //         temp.add(nums[r]);
    //         if(temp.size === set.size){
    //             windowAns++;
    //         }
    //     }
    // }


    //optimised;
    let windowAns = 0;
    let totalDistinct = new Set(nums).size;
    let left = 0;
    let distinct = 0;
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if(map.get(nums[i]) === 1) distinct++;

        while(distinct === totalDistinct){
            windowAns += nums.length - i;
            map.set(nums[left], map.get(nums[left]) - 1);
            if(map.get(nums[left]) === 0) distinct--;
            left++;
        }
    }

    return windowAns;
};