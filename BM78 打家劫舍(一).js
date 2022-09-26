/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
 function rob( nums ) {
    // write code here
    const n = nums.length;
    const dp = new Array(n+1).fill(0);
    dp[1] = nums[0];
    for(let i = 2; i<=n;i++){
        dp[i] = Math.max(dp[i-1], nums[i-1] + dp[i-2])
    }
    return dp[n];
}
module.exports = {
    rob : rob
};