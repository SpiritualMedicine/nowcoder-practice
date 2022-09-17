/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
 function mergeKLists(lists) {
    // write code here
    if (!lists) return [];
  
    const divide = function (lists, left, right) {
      if (left > right) return null;
      else if (left == right) {
        return lists[left];
      }
      const mid = (left + right) >> 1;
      return merge(divide(lists, left, mid), divide(lists, mid + 1, right));
    };
  
    const merge = function (list1, list2) {
      if (!list1) return list2;
      if (!list2) return list1;
      let newhead = new ListNode("");
      let head = newhead;
      while (list1 && list2) {
        if (list1.val < list2.val) {
          head.next = list1;
          list1 = list1.next;
        } else {
          head.next = list2;
          list2 = list2.next;
        }
        head = head.next;
      }
      if (list1) {
        head.next = list1;
      }
      if (list2) {
        head.next = list2;
      }
      return newhead.next;
    };
    return divide(lists, 0, lists.length - 1);
  }
  module.exports = {
    mergeKLists: mergeKLists,
  };
  