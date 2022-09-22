/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function FindNumsAppearOnce( array ) {
    // write code here
    const map = new Map();
    for(let i = 0; i<array.length;i++){
        if(map.has(array[i])){
            map.delete(array[i]);
        }else{
            map.set(array[i], 1);
        }
    }
    return [...map.keys()].sort();
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};