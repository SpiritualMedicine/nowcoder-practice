/**
 *
 * @param n int整型 the n
 * @return int整型
 */
 function Nqueen(n) {
    // write code here
    let res = 0;
    const pos = new Array(n).fill(0);
    let row = 0;
    function isValid(row, col) {
      for (let i = 0; i < row; i++) {
        if (
          row == i ||
          col == pos[i] ||
          Math.abs(row - i) == Math.abs(col - pos[i])
        ) {
          return false;
        }
      }
      return true;
    }
  
    function recursion(row) {
      if (row == n) {
        res += 1;
        return res;
      }
      for (let i = 0; i < n; i++) {
        if (isValid(row, i)) {
          pos[row] = i;
          recursion(row+1);
        }
      }
      return res;
    }
    return recursion(0);
  }
  module.exports = {
    Nqueen: Nqueen,
  };
  