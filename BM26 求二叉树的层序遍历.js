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
  * @return int整型二维数组
  */
 function levelOrder( root ) {
    // write code here
    let arr = [];
    if(!root) return arr;
    let queue = []
    queue.push(root)
    while(queue.length > 0){
      let temparr = []
      let size = queue.length;
      for(let  i = 0; i < size; i++){
        let node = queue.shift();
        temparr.push(node.val)
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      arr.push(temparr);
    }
    return arr;
}
module.exports = {
    levelOrder : levelOrder
};