/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    // write code here
    if (pRoot == null) return true;
  
    const check = function (node1, node2) {
      if (node1 == null && node2 == null) return true;
      if (node1 == null || node2 == null || node1.val != node2.val) return false;
  
      return check(node1.left, node2.right) && check(node1.right, node2.left);
    };
  
    return check(pRoot.left, pRoot.right);
  }
  module.exports = {
    isSymmetrical: isSymmetrical,
  };
  