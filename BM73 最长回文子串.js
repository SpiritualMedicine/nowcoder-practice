/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A string字符串 
 * @return int整型
 */
 function getLongestPalindrome( A ) {
    // write code here
    const n = A.length;
    const dp = new Array(n+1).fill(0).map(()=>new Array(n+1).fill(0));
    let max = 0;
    for(let c = 0; c <= n+1;c++){
        for(let i = 0; i<n;i++){   
            let j = c + i ;
            if(A[i] == A[j]){
                if(c<=1){
                    dp[i][j]=true;
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if(dp[i][j]){
                max = c + 1;
            }

        }
    }
    return max;
}
module.exports = {
    getLongestPalindrome : getLongestPalindrome
};