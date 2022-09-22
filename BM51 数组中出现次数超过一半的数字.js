function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    const map = new Map();
    for(let i of numbers){
        if(map.has(i)){
            map.set(i, map.get(i)+1);
        }else{
            map.set(i, 1);
        }
    }
    const len = numbers.length >> 1;
    for(const [key, value] of map){
        if(value>len){
            return key;
        }
    }
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};