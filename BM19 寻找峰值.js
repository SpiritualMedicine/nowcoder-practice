/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function findPeakElement(nums) {
  // write code here
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < nums[mid + 1]) {
      left = mid+1;
    }else{
        right = mid;
    }
  }
  return left;
}
module.exports = {
  findPeakElement: findPeakElement,
};
