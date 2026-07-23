// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let i = 0; 
    let current = head;
    while(current){
        i++;
        current = current.next
    }
    let mid = Math.ceil(i / 2);
    current = head;
    let stack = [];
    if(i % 2 === 0){
        while(current){
            if(i > mid){
                stack.push(current.val)
            }else{
                if(current.val !== stack[stack.length - 1]){
                    return false;
                }else{
                    stack.pop();
                }
            }
            i--;
            current = current.next;
        }
    }else{
        while(current){
            if(i === mid){
                current = current.next;
                i--;
                continue;
            }
            if(i > mid){
                stack.push(current.val)
            }else{
                if(current.val !== stack[stack.length - 1]){
                    return false;
                }else{
                    stack.pop();
                }
            }
            i--;
            current = current.next;
        }
    }
    return stack.length === 0
};