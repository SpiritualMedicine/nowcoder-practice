/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param cost int整型一维数组 
 * @return int整型
 */
 function minCostClimbingStairs( cost ) {
    // write code here
    const n = cost.length;
    const dp = new Array(n+1).fill(0);

    for(let i = 2; i <= n; i++){
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]);
    } 
    return dp[n];

}
module.exports = {
    minCostClimbingStairs : minCostClimbingStairs
};