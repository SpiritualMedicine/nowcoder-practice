function Permutation(str) {
    // write code here
    const res = [];
    //split参数为‘’时，才可以将字符串转换为字符数组
    str = str.split('').sort();
    let temp = [];
    let vis = new Array(str.length).fill(false);
    function rec() {
        if(temp.length == str.length){
            //join必须给定‘’参数，才可以拼成字符串
            res.push(temp.join(''));
            return;
        }
      
      for (let i = 0; i < str.length; i++) {
        if (vis[i]) {
          continue;
        }
        if ( i > 0 && !vis[i - 1] && str[i] == str[i - 1]) {
          continue;
        }
        temp.push(str[i]);
        vis[i] = true;
        rec();
        vis[i] = false;
        temp.pop()
  
      }
    }
    rec();
    return res;
  }
  module.exports = {
    Permutation: Permutation,
  };
  