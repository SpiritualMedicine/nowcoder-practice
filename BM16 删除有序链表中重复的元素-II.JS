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
 function deleteDuplicates(head) {
    // write code here
    let newhead = new ListNode("");
    newhead.next = head;
    let cur = head;
    let pre = newhead;
    let count = 0;
    while (cur && cur.next) {
      if (cur.val == cur.next.val) {
        count++;
        cur.next = cur.next.next;
      } else {
        if (count > 0) {
          pre.next = cur.next;
          count = 0;
        } else {
          pre = cur;
        }
        cur = cur.next;
      }
    }
    if (count > 0) {
      pre.next = cur.next;
    }
    return newhead.next;
  }
  module.exports = {
    deleteDuplicates: deleteDuplicates,
  };
  