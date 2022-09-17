/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 the head node
 * @return ListNode类
 */
 function sortInList( head ) {
    // write code here

    const merge = function(list1, list2){
        if(!list1) return list2;
        if(!list2) return list1;
        const head  = new ListNode('#');
        let cur = head;
        while(list1 && list2){
            if(list1.val < list2.val){
                cur.next = list1;
                list1 = list1.next;
            }
            else{
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        if(list1){
            cur.next = list1;
        }
        if(list2){
            cur.next = list2;
        
        }
        return head.next;
    }

    if(!head || !head.next){
        return head;
    }
    let left = head;
    let mid = head.next;
    let right = head.next.next;

    while(right && right.next){
        left=left.next;
        mid = mid.next;
        right = right.next.next;
    }
    left.next = null;
    return merge(sortInList(head), sortInList(mid));
}
module.exports = {
    sortInList : sortInList
};