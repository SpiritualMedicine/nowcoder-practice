/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
 function reverseBetween(head, m, n) {
    // write code here
    let res = new ListNode("");
    res.next = head;
    let cur = head;
    let pre = res;
  
    for (let i = 1; i< m; i++) {
        pre = cur;
        cur = cur.next;
    }
  
     for(let i = m; i<n;i++){
         //保存下个节点
         let temp = cur.next;
         //将当前节点的next指向下下个节点
         cur.next = temp.next;
         //将下个节点的next指向当前节点，不使用cur是因为此时的cur已经发生变化
         temp.next = pre.next;
         //将翻转成功，将链表连接起来 pre->temp->cur
         pre.next = temp;
     } 
      return res.next;
  }
  module.exports = {
    reverseBetween: reverseBetween,
  };
  