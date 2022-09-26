
/**
  * 
  * @param s string字符串 
  * @return int整型
  */
 function longestValidParentheses( s ) {
    // write code here
    let res = 0;
    const n = s.length;
    const dp = new Array(n).fill(0);
    for(let i = 1; i<n;i++){
      if(s[i] == ')'){
        if(s[i-1] == '('){
          if(i>=2){
            dp[i] = dp[i-2]+2;
          }else{
            dp[i] = 2;
          }
        }else if(i - dp[i-1] > 0 && s[i-dp[i-1]-1] == '('){
          if(i - dp[i-1] > 1){
            dp[i] = dp[i-dp[i-1]-2] + dp[i-1] + 2;
          }else{
            dp[i] = dp[i-1] + 2;
          }
        }
        res = Math.max(res, dp[i]);
      }
    }
    return res;
}
module.exports = {
    longestValidParentheses : longestValidParentheses
};