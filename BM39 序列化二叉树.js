function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(pRoot) {
  // write code here
  let s = [];
  const inorder = function (node) {
    if (!node) {
      s.push("#");
      return;
    }
    s.push(node.val);
    inorder(node.left);
    inorder(node.right);
  };
  inorder(pRoot);
  return s;
}
function Deserialize(s) {
    if (s.length < 1) {
      return null;
    }
    let num = s.shift();
    let node = null;
    if(num!='#'){
    node = new TreeNode(num);
    node.left = Deserialize(s);
    node.right = Deserialize(s);
    }
    return node;
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
};
