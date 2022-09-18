/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let q = [];
    let res = []
    q.push(pRoot);
    let reverse = false;
    while(q.length > 0){
        let temparr = [];
        let size = q.length;
        for(let i =0 ;i < size; i++){
            let node = q.shift()
            temparr.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right)
        }
        res.push(reverse?temparr.reverse():temparr);
        reverse = !reverse;
    }
    return res;
}
module.exports = {
    Print : Print
};