/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @param pattern string字符串 
 * @return bool布尔型
 */
 function match( str ,  pattern ) {
    // write code here
    const m = str.length;
    const n = pattern.length;
    const dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(false));

    function matches(i , j){
        if(i==0){
            return false;
        }
        if(pattern[j-1] == '.'){
            return true;
        }
        return str[i-1] == pattern[j-1];
    }
    dp[0][0] = true;
    for (let i = 0; i<=m;i++){
        for(let j = 1; j<=n;j++){
            if(pattern[j-1] == '*'){
                dp[i][j] = dp[i][j] | dp[i][j-2];
                if(matches(i, j-1)){
                    dp[i][j] = dp[i][j] | dp[i-1][j];
                }
            }else{
                if(matches(i,j)){
                    dp[i][j] = dp[i][j] | dp[i-1][j-1];
                }
            }
        }
    }
    return dp[m][n];
}
module.exports = {
    match : match
};