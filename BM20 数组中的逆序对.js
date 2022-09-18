function InversePairs(data) {
    // write code here
    let count = 0;
  
    const mergerSort = function(data, left, right){
        if(left >= right){
            return;
        }
        let mid = left + right >> 1;
        mergerSort(data, left, mid);
        mergerSort(data, mid+1, right);
        merge(data, left, mid, right);
    }
    const merge = function (data, left, mid, right) {
      let temp = [];
      let l = left;
      let r = mid + 1;
      while (l <= mid && r <= right) {
        if (data[l] <= data[r]) {
          temp.push(data[l]);
          l++;
        } else {
          temp.push(data[r]);
          count += mid + 1 - l;
          count %= 1000000007;
          r++;
        }
      }
      while(l<=mid){
          temp.push(data[l]);
          l++;
      }
      while(r<=right){
          temp.push(data[r]);
          r++;
      }
      for(let k = 0, i = left; i<=right;i++,k++){
          data[i] = temp[k]
      }
    };
  
    mergerSort(data, 0, data.length - 1);
    return count;
  }
  module.exports = {
    InversePairs: InversePairs,
  };
  