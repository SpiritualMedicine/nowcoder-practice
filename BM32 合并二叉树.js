/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param t1 TreeNodeš▒╗ 
 * @param t2 TreeNodeš▒╗ 
 * @return TreeNodeš▒╗
 */
 function mergeTrees( t1 ,  t2 ) {
    // write code here
    if(!t1) return t2;
    if(!t2) return t1;
    let head =  new TreeNode(t1.val + t2.val);
    head.left = mergeTrees( t1.left ,  t2.left );
    head.right = mergeTrees(t1.right, t2.right)
    return head;
    
}
module.exports = {
    mergeTrees : mergeTrees
};