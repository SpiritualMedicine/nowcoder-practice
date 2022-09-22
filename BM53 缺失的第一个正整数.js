/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
 function minNumberDisappeared( nums ) {
    // write code here
    const n = nums.length;
    const map = new Map();
    for(let i of nums){
        map.set(i,1);
    }
    
    let res = 1;
    while(map.has(res)){
        res++;
    }
    return res;
}
module.exports = {
    minNumberDisappeared : minNumberDisappeared
};