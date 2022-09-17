/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 求二叉树的右视图
 * @param xianxu int整型一维数组 先序遍历
 * @param zhongxu int整型一维数组 中序遍历
 * @return int整型一维数组
 */
 function solve(xianxu, zhongxu) {
    // write code here
  
    const rebuild = function (xianxu, zhongxu) {
      if (!xianxu.length || !zhongxu.length) {
        return null;
      }
  
      const root = new TreeNode(xianxu.shift());
      const rootIndex = zhongxu.findIndex((node) => node === root.val);
  
      root.left = rebuild(xianxu, zhongxu.slice(0, rootIndex));
      root.right = rebuild(xianxu, zhongxu.slice(rootIndex + 1));
      return root;
    };
  
    const tree = rebuild(xianxu, zhongxu);
  
    if (tree == null) return [];
  
    const queue = [];
    const res = [];
    queue.push(tree);  
    while (queue.length) {
        let len = queue.length;
  
        while(len--){
            const node = queue.shift();
            if(!len) {res.push(node.val);}
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
  
        }
    }
    return res;
  }
  module.exports = {
    solve: solve,
  };
  