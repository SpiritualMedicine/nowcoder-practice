/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
 function LCS(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    //dp[i][j]表示s1的前i段和s2的前j段的最大公共子序列
    const dp = new Array(m + 1).fill("").map(() => new Array(n + 1).fill(""));
      let max = 0;
      let pos = 0;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] == str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
        } else{
          dp[i][j] = '';
        }
        if(dp[i][j].length > max){
            max = dp[i][j].length;
            pos = i - 1;
        }
      }
    }
  
    return str1.slice(pos - max + 1,pos+1);
  }
  module.exports = {
    LCS: LCS,
  };
  