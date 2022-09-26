/**
 *
 * @param s string字符串
 * @return string字符串一维数组
 */
 function restoreIpAddresses(s) {
    // write code here
    const res = [];
    let nums = "";
  
    function dfs(step, index) {
      let cur = "";
      if (step == 4) {
        if (index != s.length) {
          return;
        }
        res.push(nums);
      } else {
        let i = index;
        while (i < index + 3 && i < s.length) {
          cur += s[i];
          let num = parseInt(cur);
          let temp = nums;
          if (num <= 255 && (cur.length == 1 || cur[0] != "0")) {
            if (step - 3 != 0) {
              nums += cur + ".";
            } else {
              nums += cur;
            }
            dfs(step + 1, i + 1);
            nums = temp;
          }
          i++;
        }
      }
    }
  
    dfs(0, 0);
    return res;
  }
  module.exports = {
    restoreIpAddresses: restoreIpAddresses,
  };
  