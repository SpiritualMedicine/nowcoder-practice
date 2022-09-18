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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
 function lowestCommonAncestor(root, o1, o2) {
    // write code here
    let flag = false;
    let path = [];
    const dfs = function (root, val) {
      if (flag || !root) return;
      path.push(root.val);
      if (root.val == val) {
        flag = true;
        return;
      }
      dfs(root.left, val);
      dfs(root.right, val);
  
      if (flag) return;
      path.pop();
    };
    dfs(root, o1);
    const patho1 = [...path];
    flag = false;
    path = [];
    dfs(root, o2);
    const patho2 = [...path];
  
    let res = 0;
    for (let i = 0; i < patho1.length && i < patho2.length; i++) {
      if (patho1[i] == patho2[i]) {
        res = patho1[i];
      } else {
        break;
      }
    }
    return res;
  }
  module.exports = {
    lowestCommonAncestor: lowestCommonAncestor,
  };
  