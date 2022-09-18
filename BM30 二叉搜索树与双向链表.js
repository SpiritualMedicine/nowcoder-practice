/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let pre = null;
let head = null;
function Convert(pRootOfTree)
{
    // write code here
    if(!pRootOfTree) return null;
    Convert(pRootOfTree.left);
    if(!pre){
        head = pRootOfTree;
        pre = pRootOfTree;
    }
    else{
        pre.right = pRootOfTree;
        pRootOfTree.left = pre;
        pre = pRootOfTree;
    }
    Convert(pRootOfTree.right);
    return head;

}
module.exports = {
    Convert : Convert
};