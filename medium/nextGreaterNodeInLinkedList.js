// 1019. Next Greater Node In Linked List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the head of a linked list with n nodes.

// For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

// Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

 

// Example 1:


// Input: head = [2,1,5]
// Output: [5,5,0]
// Example 2:


// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 104
// 1 <= Node.val <= 109

//solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    //find the max;
    //find the next max;
    let current = head;
    let arr = []
    while(current){
        arr.push(current.val);
        current = current.next;
    }
    let ans = new Array(arr.length).fill(0);
    let stack = [];
    for(let i = 0; i < arr.length; i++){
        while(stack.length && arr[i] > arr[stack[stack.length - 1]]){
            let idx = stack.pop();
            ans[idx] = arr[i]
        }
        stack.push(i)
    }
    return ans;
};