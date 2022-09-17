/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
 function removeNthFromEnd(head, n) {
    // write code here
    let slow = head;
    let fast = head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    if(!fast){
      return head.next;
    }
  
    while(fast.next){
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
  }
  module.exports = {
    removeNthFromEnd: removeNthFromEnd,
  };
  