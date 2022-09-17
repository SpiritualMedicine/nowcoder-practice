/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    //太精妙了！！！！
    let l1 = pHead1;
    let l2 = pHead2;
    while (l1 != l2) {
      l1 = l1 == null ? pHead2 : l1.next;
      l2 = l2 == null ? pHead1 : l2.next;
    }
    return l1;
  }
  module.exports = {
    FindFirstCommonNode: FindFirstCommonNode,
  };
  