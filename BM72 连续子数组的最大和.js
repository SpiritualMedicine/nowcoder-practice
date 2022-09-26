function FindGreatestSumOfSubArray(array)
{
    // write code here
    let sum = 0;
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        sum = Math.max(sum + array[i], array[i]);
        max = Math.max(max, sum)
    }
    return max;
}
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};