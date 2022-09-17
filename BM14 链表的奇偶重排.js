
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
 function oddEvenList(head) {
    // write code here
    if(!head) return head;
    let opre = head;
    let epre = head.next;
    let evenhead = epre;
    
  
    while (epre && epre.next) {
      opre.next = epre.next;
      opre = opre.next;
      epre.next = opre.next
      epre = epre.next;
    }
  
    
    opre.next = evenhead;
    return head;
  }
  module.exports = {
    oddEvenList: oddEvenList,
  };
  