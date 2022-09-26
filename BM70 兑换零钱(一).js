/**
 * 最少货币数
 * @param arr int整型一维数组 the array
 * @param aim int整型 the target
 * @return int整型
 */
 function minMoney(arr, aim) {
    // write code here
    const n = arr.length;
    const dp = new Array(aim + 1).fill(+aim + 1);
    dp[0] = 0;
    for (let i = 1; i < aim+1; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[j] <= i) {
          dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1);
        }
      }
    }
    return dp[aim]>aim?-1:dp[aim];
  }
  module.exports = {
    minMoney: minMoney,
  };
  