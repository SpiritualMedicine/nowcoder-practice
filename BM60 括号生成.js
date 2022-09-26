/**
 *
 * @param n int整型
 * @return string字符串一维数组
 */
 function generateParenthesis(n) {
    // write code here
  
    function recursion(left, right, str) {
      if (left == n && right == n) {
        res.push(str);
        return;
      }
      if (left < n) {
        recursion(left + 1, right, str + "(");
      }
      if (right < n && left > right) {
        recursion(left, right+1, str + ")");
      }
    }
    const res = [];
    let str = "";
    recursion(0, 0, str);
  
    return res;
  }
  module.exports = {
    generateParenthesis: generateParenthesis,
  };
  