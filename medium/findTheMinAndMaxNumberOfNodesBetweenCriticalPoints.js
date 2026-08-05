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
var nodesBetweenCriticalPoints = function(head) {
    //find the first critical point;
    //find the second last;
    //find the last;
    //maxikum is last - first;
    //minimum is last - second last;
    //create an arr[-1,-1];
    //loop through the linked list;
    //make an i for keeping the i;
    //make a stack; keep pushing the arr with i;
    //if stack is less then 1 return ans;
    //else return [stack[stack.length - 1] - stack[0], stack[stack.length - 1] - stack[stack.length - 2]];
    let i = 1;
    let current = head;
    let prev = null;
    let stack = [];
    let minVal = Infinity;
    while(current){
        if(prev === null){
            prev = current.val; 
        }else{
            if(current.next === null) break;
            let next = current.next.val;
            let val = current.val;
            if((val > prev && val > next) || (val < prev && val < next)){
                stack.push(i);
                if(stack.length > 1){
                    minVal = Math.min(stack[stack.length - 1] - stack[stack.length - 2], minVal)
                }
            }
            prev = val;
        }
        i++;
        current = current.next;   
    }
    if(stack.length < 2) return [-1, -1];
    return [minVal, stack[stack.length - 1] - stack[0]]
};