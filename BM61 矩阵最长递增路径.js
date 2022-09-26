/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 递增路径的最大长度
 * @param matrix int整型二维数组 描述矩阵的每个数
 * @return int整型
 */
 function solve(matrix) {
    // write code here
    const m = matrix.length;
    const n = matrix[0].length;
    const dir = [[0,1],[0,-1],[-1,0],[1,0]];
  
    function dfs(matrix, i, j, len) {
      if(++len > res){
          res = len;
      }
      for(let item of dir){
          let nexti = i + item[0];
          let nextj = j + item[1];
          if(nexti<0 || nexti >=m || nextj<0 || nextj>=n) continue;
          if(matrix[nexti][nextj] <= matrix[i][j]){continue;}
          dfs(matrix, nexti, nextj, len);
      }
    }
  
    let res = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        dfs(matrix, i, j, 0);
      }
    }
    return res;
  }
  module.exports = {
    solve: solve,
  };
  