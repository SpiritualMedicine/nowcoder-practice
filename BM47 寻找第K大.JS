/**
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
 function findKth(a, n, K) {
    // write code here
  
    const partition = function (left, right) {
      const pivot = a[left];
      while (left < right) {
        while (left < right && a[right] <= pivot) {
          right--;
        }
        a[left] = a[right];
        while (left < right && a[left] >= pivot) {
          left++;
        }
        a[right] = a[left];
      }
      a[left] = pivot;
      return left;
    };
  
    const qSort = function (left, right) {
      if (left <= right) {
        const pivot = partition(left, right);
        if (pivot == K - 1) {
          return a[K - 1];
        } else if (pivot < K - 1) {
          return qSort(pivot + 1, right);
        } else {
          return qSort(left, pivot-1);
        }
      }
      return -1;
    };
    return qSort(0, n-1);
    
  }
  module.exports = {
    findKth: findKth,
  };
  