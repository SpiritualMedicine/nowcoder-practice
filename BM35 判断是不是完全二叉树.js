/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */
 function isCompleteTree(root) {
    // write code here
    if (!root) return true;
    let q = [];
    q.push(root);
    let flag = false;
    while (q.length > 0) {
      let length = q.length;
      for (let i = 0; i < length; i++) {
        let node = q.shift();
        if (!node) {
          flag = true;
        } else {
          if (flag) return false;
          q.push(node.left);
          q.push(node.right);
        }
      }
    }
    return true;
  }
  module.exports = {
    isCompleteTree: isCompleteTree,
  };
  