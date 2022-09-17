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
 function deleteDuplicates( head ) {
    // write code here
    let cur = head
    while(cur && cur.next){
      if(cur.val == cur.next.val){
        cur.next= cur.next.next;
      }
      else{
        cur = cur.next
      }
    }
      return head;
}
module.exports = {
    deleteDuplicates : deleteDuplicates
};