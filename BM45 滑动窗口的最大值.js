function maxInWindows(num, size) {
    // write code here
    let res = [];
  
    if (size != 0 && size <= num.length) {
      let maxValue = Number.MIN_SAFE_INTEGER;
      let i = 0;
      let tmp = 0;
      for (; i < size; i++) {
        if (num[i] > maxValue) {
          maxValue = num[i];
          tmp = i;
        }
      }
      res.push(maxValue);
      for (; i < num.length; i++) {
        if (num[i] > maxValue) {
          maxValue = num[i];
          tmp = i;
        } else {
          if (i - size + 1 > tmp) {
            maxValue = num[i - size + 1];
            for (let j = i - size + 1; j <= i; j++) {
              if (num[j] > maxValue) {
                tmp = j;
                maxValue = num[j];
              }
            }
          }
        }
        res.push(maxValue);
      }
    }
    return res;
  }
  module.exports = {
    maxInWindows: maxInWindows,
  };
  