/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    //make sum of the arr to know how many one in it.
    //if ones is one or less just return 0;
    //make arr with concat of nums to handle circular arr;
    //make left;
    //make oneInWindow;
    //make currOnes;
    //loop using right;
    //currones add right nums;
    //if more than ones then just keep currones-- and left++;
    //if same as ones;
    //oneIniwndow should be max of onInwindow or currones;
    //return ones - currones;

    let ones = nums.reduce((a,b) => a + b, 0);
    if(ones <= 1) return 0;
    let arr = nums.concat(nums);
    let left = 0;
    let currOnes = 0;
    let MaxOnesInWindow = 0;
    for(let right = 0; right < arr.length; right++){
        currOnes += arr[right];

        while(right - left + 1 > ones){
            if(arr[left] === 1){
                currOnes--;
            }
            left++;
        }

        if(right - left + 1 === ones){
            MaxOnesInWindow = Math.max(MaxOnesInWindow, currOnes)
        }
    }

    return ones - MaxOnesInWindow;
};