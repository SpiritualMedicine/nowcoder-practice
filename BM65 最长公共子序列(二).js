
/**
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
//偷了个懒 直接用dp去存字符串了
 function LCS( s1 ,  s2 ) {
    // write code here
    const m = s1.length;
    const n = s2.length;

    //dp[i][j]表示s1的前i段和s2的前j段的最大公共子序列
    const dp = new Array(m+1).fill('').map(()=>new Array(n+1).fill(''));
    

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(s1[i-1] == s2[j-1]){
                dp[i][j] = dp[i-1][j-1] + s1[i-1];
            }else if(dp[i-1][j].length > dp[i][j-1].length){
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i][j-1];
            }
        }
    }
   
    return dp[m][n].length?dp[m][n]:'-1';
}
module.exports = {
    LCS : LCS
};