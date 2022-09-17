/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return ListNode类
 */
 function detectCycle(head) {
    // write code here
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        while (head != slow) {
          head = head.next;
          slow = slow.next;
        }
        return slow;
      }
    }
    return null;
  }
  module.exports = {
    detectCycle: detectCycle,
  };
  