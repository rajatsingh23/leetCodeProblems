// 725. Split Linked List in Parts
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

// Return an array of the k parts.

 

// Example 1:


// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].
// Example 2:


// Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
// Output: [[1,2,3,4],[5,6,7],[8,9,10]]
// Explanation:
// The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
 

// Constraints:

// The number of nodes in the list is in the range [0, 1000].
// 0 <= Node.val <= 1000
// 1 <= k <= 50

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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    //make a n to see list size;
    //find the base and extra of the list;
    //loop through k;
    //make an variable size;
    //make an current;
    // make an ans arr []
    //make an currentPart;
    //size will be equal to base + (extra < 0 ? 0 : 1);
    //decreaset the extra;
    //loop through the size;
    //current will be current . next;
    // if current;
    // let nextpart = current.next;
    // current.next = null;
    // current = nextPart;
    //push currentPart to ans;
    //return ans;
    let n = 0;
    let current = head;
    while(current){
        n++;
        current = current.next;
    }
    current = head;
    let base = Math.floor(n / k);
    let extra = n % k;

    let ans = [];
    for(let i = 0; i < k; i++){
        let currentPart = current;
        let size = base + (extra > 0 ? 1 : 0);
        if(extra > 0) extra--;
        for(let j = 1; j < size && current; j++){
            current = current.next;
        }
        if(current){
            let nextPart = current.next;
            current.next = null;
            current = nextPart;
        }
        ans.push(currentPart)
    }
    return ans;
};