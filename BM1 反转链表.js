/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    /*使用双链表
      let newhead = null;
  
      let cur = pHead;
  
      while(cur){
          let temp = cur.next;
          cur.next = newhead;
          newhead = cur;
          cur = temp
      
      }
      return newhead;*/
  
    /*用栈
    let q = [];
    while (pHead) {
      q.push(pHead);
      pHead = pHead.next;
    }
    if (q.length == 0) {
      return null;
    }
    let res = q.pop();
    let dummy = res;
    while (q.length > 0) {
      res.next = q.pop();
      res = res.next;
    }
    res.next = null;
    return dummy;*/
  
    /*用递归*/ 
    if(pHead == null || pHead.next == null){
        return pHead;
    }
  
    let ans = ReverseList(pHead.next);
    pHead.next.next=pHead;
    pHead.next = null;
    return ans;
  
  
  }
  module.exports = {
    ReverseList: ReverseList,
  };
  