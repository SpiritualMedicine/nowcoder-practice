/**
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
 function permuteUnique(num) {
    // write code here
    num.sort();
    const res = [];
    let path = [];
    let used = [];
  
    function recusion() {
      if (path.length == num.length) {
        res.push([...path]);
      } else {
        for (let i = 0; i < num.length; i++) {
            if(used[i]) continue; 
          if (i != 0 && num[i] == num[i - 1] && !used[i - 1]) continue;
          if (!used[i]) {
            path.push(num[i]);
            used[i] = true;
            recusion();
            used[i] = false;
            path.pop();
          }
        }
      }
    }
    // write code here
  
    recusion();
    return res;
  }
  module.exports = {
    permuteUnique: permuteUnique,
  };
  