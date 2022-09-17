/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
 function hasCycle( head ) {
    // write code here
    if(!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;

}
module.exports = {
    hasCycle : hasCycle
};