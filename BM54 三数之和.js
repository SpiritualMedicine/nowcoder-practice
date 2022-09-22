/**
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
 function threeSum(num) {
    // write code here
    //坑死了 默认按字典序排列 负数的排序全乱了！！！！
    num = num.sort((a,b) => a-b);
    const res = [];
    
    for(let i = 0; i < num.length-2; i++){
        if(num[i] == num[i-1] && i) continue;
        let l=i+1;
        let r = num.length-1;
        while(l<r){
            if(num[l] + num[r] == -num[i]){
                res.push([num[i], num[l], num[r]]);
                while(num[l] == num[l+1] && l+1<r) l++;
                while(num[r] == num[r-1] && l+1<r) r--;
                l++;
                r--;
            }else if(num[l] + num[r] > -num[i]){
                r--;
            }else{
                l++;
            }
        }
    }
    return res;
  }
  module.exports = {
    threeSum: threeSum,
  };
  