/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length == 0 || vin.length == 0){
        return null;
    }
    let root = pre.shift();
    let rootIndex = vin.indexOf(root)
    let node = new TreeNode(root);
    node.left = reConstructBinaryTree(pre, vin.slice(0,rootIndex));
    node.right = reConstructBinaryTree(pre, vin.slice(rootIndex+1));
    return node;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};