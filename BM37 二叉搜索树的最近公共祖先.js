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
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
 function lowestCommonAncestor(root, p, q) {
    // write code here
    const getPath = function (root, val) {
      let path = [];
      let node = root;
      while (node.val != val) {
        path.push(node.val);
        if (node.val < val) {
          node = node.right;
        } else {
          node = node.left;
        }
      }
      path.push(node.val);
      return path;
    };
  
    const pathp = getPath(root, p);
    const pathq = getPath(root, q);
    let res;
    for (let i = 0; i < pathp.length && i < pathq.length; i++) {
      if (pathp[i] == pathq[i]) {
        res = pathq[i];
      } else {
        break;
      }
    }
    return res;
  }
  module.exports = {
    lowestCommonAncestor: lowestCommonAncestor,
  };
  