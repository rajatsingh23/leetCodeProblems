// 1721. Swapping Nodes in a Linked List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    //first find the number of nodes let it be size;
    //loop through the nodes;
    //if i is kth store that value somewhere;
    //if size - i is k then swap with kth node;
    let size = 1;
    let curr = head;
    let firstNode = null;
    while(curr){
        if(size === k){
            firstNode = curr;
        }
        size++;
        curr = curr.next;
    }

    let i = 1;
    curr = head;
    while(curr){
        let last = size - k 
        if(last === i){
            let secondNode = curr;
            let temp = firstNode.val;
            firstNode.val = secondNode.val;
            secondNode.val = temp;
            break;
        }
        curr = curr.next;
        i++;
    }
    return head;
};