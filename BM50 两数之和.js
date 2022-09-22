
/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
 function twoSum( numbers ,  target ) {
    // write code here
    const map = new Map();
    for(let i=0; i<numbers.length; i++){
      let temp = target - numbers[i];
      if(map.has(temp)){
        return [map.get(temp)+1, i+1];
      }else{
        map.set(numbers[i], i);
      }
    }
    return [];
}
module.exports = {
    twoSum : twoSum
};