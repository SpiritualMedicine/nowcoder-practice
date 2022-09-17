/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
 function search( nums ,  target ) {
    // write code here

    const binarySearch = function(nums, left , right){
        if(left>right) return -1;
        if(left == right) return nums[left] == target ? left: -1;
        const mid = (left+right)>>1;
        if(nums[mid] == target) return mid;
        if(nums[mid] > target){
            return binarySearch(nums, left, mid-1);
        }
        else{
            return binarySearch(nums, mid+1, right);
        }
    }
    return binarySearch(nums, 0, nums.length-1);

}
module.exports = {
    search : search
};