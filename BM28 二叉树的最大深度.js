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
 * @return int整型
 */
 function maxDepth(root) {
    // write code here
    if(!root) return 0;
    // const maxDepth = function(node, depth){
    //   if(!node) return depth;
    //   //depthMax = Math.max(depth+1, depthMax);
    //   //maxDepth(node.left, depth + 1);
    //   //maxDepth(node.right, depth + 1);
    // }
    // return depthMax;
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
  }
  module.exports = {
    maxDepth: maxDepth,
  };
  