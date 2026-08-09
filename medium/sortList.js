// 148. Sort List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

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
 * @return {ListNode}
 */
var sortList = function(head) {
    let map = [];
    let current = head;
    while(current){
        map.push(current.val);
        current = current.next;
    }
    map.sort((a,b) => a - b)
    let dummy = new ListNode(-1);
    let tail = dummy;
    for(let num of map){
        tail.next = 
        new ListNode(num)
        tail = tail.next;
    }
    return dummy.next;
};