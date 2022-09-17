/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
 function addInList(head1, head2) {
    // write code here
    const reverList = function (head) {
      if (!head) return null;
      let pre = null;
      let cur = head;
      while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
      }
      return pre;
    };
  
    head1 = reverList(head1);
    head2 = reverList(head2);
    let newhead = new ListNode("#");
    let cur = newhead;
    let carry = 0;
    while (head1 || head2 || carry != 0) {
      let val1 = head1 ? +head1.val : 0;
      let val2 = head2 ? +head2.val : 0;
      let temp = val1 + val2 + carry;
      carry = temp >= 10 ? 1 : 0;
      temp = temp % 10;
      cur.next = new ListNode(temp);
      cur = cur.next;
      if (head1) head1 = head1.next;
      if (head2) head2 = head2.next;
    }
    return reverList(newhead.next);
  }
  module.exports = {
    addInList: addInList,
  };
  