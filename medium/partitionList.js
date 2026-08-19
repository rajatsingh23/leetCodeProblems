// 86. Partition List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) return head;
    let dummy = new ListNode(-1);
    let tail = dummy;
    while(head && head.val < x){
        tail.next = head;
        tail = tail.next;
        head = head.next;
    }
    let current = head;
    let prev = current;
    while(current){
        let val = current.val;
        if(val < x){
            tail.next = current;
            tail = tail.next;
            prev.next = current.next;
           
        }else{
            prev = current;
        }

        current = current.next;
    }
    tail.next = head;
    dummy = dummy.next;
    return dummy;
};