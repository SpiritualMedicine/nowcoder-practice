/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 给定数组的最长严格上升子序列的长度。
 * @param arr int整型一维数组 给定的数组
 * @return int整型
 */
 function LIS( arr ) {
    // write code here
    

    let res = 0
    const dp = new Array(arr.length).fill(1);
    for(let i =1; i< arr.length;i++){
        for (let j = 0; j<i;j++){
            if(arr[i] > arr[j] && dp[i] < dp[j]+1){
                dp[i] = dp[j] + 1;
                res = Math.max(dp[i], res);
            }
        }
    }
    return res;

}
module.exports = {
    LIS : LIS
};