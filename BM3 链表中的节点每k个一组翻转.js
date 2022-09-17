/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
 function reverseKGroup( head ,  k ) {
    // write code here
    let tail = head;
    for(let i =0; i < k; i++){
      if(!tail){
        return head;
      }
      tail = tail.next;
    }

    let pre = null;
    let cur = head;
    while (cur!=tail){
      let temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    head.next = reverseKGroup(tail, k);
    return pre;
    

}
module.exports = {
    reverseKGroup : reverseKGroup
};