//arr; positive no's, whole numbers;
//return the arr of the postions of the next greater element; if there is no greater element return -1;
//[4,5,2,10] => [1, 3, 3, -1]
//[3,3,3] => [-1, -1, -1]
//[1,2,3,4] => [1, 2, 3, -1]

function nextGreaterElementPosition(arr){
    //bruteforce => loop arr, nested inside the loop, 
    //let n = ar.length;
    //let ans = Array(n).fill(-1);
    //stack = [];
    //loop arr;
    //while stack.length && arr[i] > arr[stack[stack.lengt - 1]];
    
}

console.log(nextGreaterElementPosition([4,5,2,10]), '[1, 3, 3, -1]') //[1, 3, 3, -1]
console.log(nextGreaterElementPosition([3,3,3]), '[-1, -1, -1]') //[-1, -1, -1]
console.log(nextGreaterElementPosition([1,2,3,4]), '[1, 2, 3, -1]') //[1, 2, 3, -1] 