// 739. Daily Temperatures
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

//solution

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    //arr of temp [45,45, 67, 30, 75,65,70,76] => [1,2,1,3];
    //whole numbers;
    //return days;
    
    //brute-force => i, 0; nested loop of j ; start from i + 1; if greater than return j - 1;
    // let days = [];
    // for(let i = 0; i < temp.length; i++){
    //     for(let j = i + 1; j < temp.length; j++){
    //         if(temp[i] < temp[j]){
    //             days.push(j - i);
    //             break;
    //         }
    //         if(j === temp.length - 1) days.push(0)
    //     }
    // } 
    // days.push(0)
    // return days;

    //optimized;
    //make an ans of size temp.length; fill(0);
    //make a stack arr;
    //loop through temp;
    //while(stack.length && temp[i] > temp[stack[stack.length - 1]]);
    //stack.push(i)
    //return ans;
    let n = temp.length; 
    let ans = Array(n).fill(0);
    let stack = []
    for(let i = 0; i < temp.length; i++){
        while(stack.length && temp[i] > temp[stack[stack.length - 1]]){
            let prev = stack.pop();
            ans[prev] = i - prev;
        }
        stack.push(i)
    }
    return ans;
};