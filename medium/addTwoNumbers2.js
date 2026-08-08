// 445. Add Two Numbers II
// Medium
// Topics
// premium lock icon
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
 

// Follow up: Could you solve it without reversing the input lists?

//solution

var addTwoNumbers = function(l1, l2) {

    function reverse(head) {
        let prev = null;
        while (head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    l1 = reverse(l1);
    l2 = reverse(l2);

    let carry = 0;
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        tail.next = new ListNode(sum % 10);
        tail = tail.next;
    }

    return reverse(dummy.next);
};