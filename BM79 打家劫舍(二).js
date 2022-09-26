/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
 function rob(nums) {
    // write code here
  
    const n = nums.length;
    const dp1 = new Array(n + 1).fill(0);
    const dp2 = new Array(n + 1).fill(0);
  
    dp1[1] = nums[0];
    dp2[1] = 0;
    for (let i = 2; i < n; i++) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i-1]);
    }
    for (let i = 2; i <= n; i++) {
      dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i-1]);
    }
    let res= Math.max(dp1[n-1], dp2[n]);
    return res;
  }
  module.exports = {
    rob: rob,
  };
  