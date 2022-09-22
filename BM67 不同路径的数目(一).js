/**
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
 function uniquePaths(m, n) {
    // write code here
  
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (i == 1 || j == 1) {
          dp[i][j] = 1;
          continue;
        }
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[m][n];
  }
  module.exports = {
    uniquePaths: uniquePaths,
  };
  