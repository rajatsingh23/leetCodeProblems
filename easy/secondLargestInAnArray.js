// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

//arr is whole numbers,
//return second largest (int) 
//arr[12, 35, 1, 10, 34, 1] => 34;

function secondLargest(arr){
    //sort;
    //loop from the end;
    //if the ith is greater than ith - 1 we will just return the i - 1element;
    //and i = 0; return - 1;
    // arr.sort((a,b) => b - a);
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > arr[i + 1]){
    //         return arr[i+1]
    //     }
    // }
    // return - 1;

    //variables;
    //max; -1;
    //secondMax; -1;
    //loop through the arr;
    //if arr[i] > max; max = arr[i];
    //if arr[i] > secondMax && less than [max];
    //return secondMax;
    let max = -1;
    let secondMax = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i]
        }
    }
    return secondMax;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]), '34') //34
console.log(secondLargest([10, 5, 10]), '5') //5
console.log(secondLargest([10, 10, 10]), ' -1') //-1   
console.log(secondLargest([5,10]), '5') //5