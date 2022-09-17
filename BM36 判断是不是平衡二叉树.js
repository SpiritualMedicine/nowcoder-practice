/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    let isBalanced = true;
    const countDepth = function(node){
        if(!node) return 0;
        let l = countDepth(node.left);
        let r = countDepth(node.right);

        if(Math.abs(l-r) > 1){
            isBalanced = false;
        }
        return Math.max(l, r) + 1;
    }
    countDepth(pRoot);
    return isBalanced;
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};