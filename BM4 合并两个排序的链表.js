function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2) {
  // write code here

  if (!pHead2) return pHead1;
  if (!pHead1) return pHead2;
  let newhead = new ListNode("#");
  let dummy = newhead;
  while (pHead1 && pHead2) {
    if (pHead1.val < pHead2.val) {
      newhead.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      newhead.next = pHead2;
      pHead2 = pHead2.next;
    }
    newhead = newhead.next;
  }
  if (pHead1) {
    newhead.next = pHead1;
  }
  if (pHead2) {
    newhead.next = pHead2;
  }
  return dummy.next;
}
module.exports = {
  Merge: Merge,
};
