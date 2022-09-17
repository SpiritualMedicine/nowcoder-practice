/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @param sum int整型
 * @return bool布尔型
 */
 function hasPathSum(root, sum) {
    // write code here
  
    const path = function (node, target) {
      if (!node) return false;
  
      target = target - node.val;
  
      if (!node.left && !node.right && target === 0) {
        return true;
      }
  
      return path(node.left, target) || path(node.right, target);
    };
  
    return path(root, sum);
  }
  module.exports = {
    hasPathSum: hasPathSum,
  };
  