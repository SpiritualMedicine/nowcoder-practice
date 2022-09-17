/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 the head
 * @return bool布尔型
 */
 function isPail( head ) {
    // write code here
    let q = [];
    let cur = head;
    while(cur){
        q.push(cur.val)
        cur = cur.next;
    }
    cur = head;
    while(q.length > 0){
        if(cur.val != q.pop()){
            return false;
        }
        cur = cur.next;
    }
    return true;
}
module.exports = {
    isPail : isPail
};