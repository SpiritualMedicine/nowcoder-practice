/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
 function compare(version1, version2) {
    // write code here
    let v1 = version1.split(".").map(Number);
    let v2 = version2.split(".").map(Number);
    for(let i =0; i<v1.length || i<v2.length;i++){
        let v1temp = i<v1.length?v1[i]:0;
        let v2temp = i < v2.length?v2[i]:0;
  
        if(v1temp>v2temp) return 1;
        if(v2temp>v1temp) return -1;
        console.log(v1temp, v2temp);
    }
    return 0;
  }
  module.exports = {
    compare: compare,
  };
  