/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str1 string字符串 
 * @param str2 string字符串 
 * @return int整型
 */
 function editDistance( str1 ,  str2 ) {
    // write code here

    const m = str1.length;
    const n = str2.length;
    const dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    for(let i = 1; i <= m; i++){
        dp[i][0] = dp[i-1][0] + 1;
    }
    for(let i = 1; i <= n; i++){
        dp[0][i] = dp[0][i-1] + 1;
    }
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(str1[i-1] == str2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j]= Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])+1;
            }
        }
    }
    return dp[m][n];

}
module.exports = {
    editDistance : editDistance
};