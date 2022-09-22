
/**
 * 
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
 function minPathSum( matrix ) {
    // write code here
    const m = matrix.length;
    const n = matrix[0].length; 
    const dp = new Array(m+1).fill(0).map(()=>new Array(n+1));
    dp[0][0] = matrix[0][0];
    for(let i = 1; i <m; i++){
        dp[i][0] = matrix[i][0] + dp[i-1][0];
    }
    for(let j = 1; j <n; j++){
        dp[0][j] = matrix[0][j] + dp[0][j-1];
    }
    for(let i = 1 ; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j]= Math.min(dp[i-1][j], dp[i][j-1]) + matrix[i][j];
        }
    }
    return dp[m-1][n-1]; 
}
module.exports = {
    minPathSum : minPathSum
};