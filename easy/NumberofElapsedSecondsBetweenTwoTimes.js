// 3986. Number of Elapsed Seconds Between Two Times
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given two valid times startTime and endTime, each represented as a string in the format "HH:MM:SS".

// Return the number of seconds that have elapsed from startTime to endTime.

 

// Example 1:

// Input: startTime = "01:00:00", endTime = "01:00:25"

// Output: 25

// Explanation:

// endTime is 25 seconds ahead of startTime.
// Example 2:

// Input: startTime = "12:34:56", endTime = "13:00:00"

// Output: 1504

// Explanation:

// endTime is 25 minutes and 4 seconds ahead of startTime, which equals 1504 seconds.

 

// Constraints:

// startTime.length == 8
// endTime.length == 8
// startTime and endTime are valid times in the format "HH:MM:SS"
// 00 <= HH <= 23
// 00 <= MM <= 59
// 00 <= SS <= 59
// endTime is not earlier than startTime

//solution

/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    let startArr = startTime.split(":")
    let endArr = endTime.split(":")
    let startSecond = (Number(startArr[0]) * 3600) + (Number(startArr[1]) * 60) + Number(startArr[2]) 
    let endSecond = (Number(endArr[0]) * 3600) + (Number(endArr[1]) * 60) + Number(endArr[2])

    return endSecond - startSecond; 
};
