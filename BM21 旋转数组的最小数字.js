
// #
// # 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
// #
// # 
// # @param rotateArray int整型一维数组 
// # @return int整型
// #

function minNumberInRotateArray(rotateArray)
{
    // write code here
    let left = 0;
    let right = rotateArray.length - 1;

    while(left<right){
        let mid = (left+right)>>1;

        if(rotateArray[mid] > rotateArray[right]){
            left = mid + 1;
        }
        else if(rotateArray[mid] == rotateArray[right]){
            right--;
        }
        else{
            right = mid;
        }
    }
    return rotateArray[left];
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};