// 143. Reorder List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //find the mid;
    //reverse the second half;
    //merge both alternateivly;
    let mid = head
    let fast = head;
    while(fast.next && fast.next.next){
        mid = mid.next;
        fast = fast.next.next;
    }
    let second = mid.next;
    mid.next = null;
    let prev = null;
    while(second){
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    second = prev;
    let first = head;
    while(second){
        let firstNext = first.next;
        let secondNext = second.next;

        first.next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
    
};