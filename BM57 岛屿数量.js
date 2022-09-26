/**
 * 判断岛屿数量
 * @param grid string字符串型二维数组 
 * @return int整型
 */
//dfs清零
 function solve( grid ) {
    // write code here
    const m = grid.length;
    if(m ==0) return 0;
    const n = grid[0].length;

    function dfs(i , j ){
        grid[i][j] = '0';
        //左
        if(j-1 >= 0 && grid[i][j-1] == '1'){
            dfs(i, j-1);
        }
        //右
        if(j+1<n && grid[i][j+1] == '1'){
            dfs(i, j+1);
        }
        //上
        if(i-1 >= 0 && grid[i-1][j] == '1'){
            dfs(i-1, j);
        }
        //下
        if(i+1<m && grid[i+1][j] == '1'){
            dfs(i+1, j);
        }
    }

    let count = 0;
    for(let i =0; i<m;i++){
        for(let j = 0; j<n;j++){
            if(grid[i][j] == '1'){
                count++;
                dfs(i,j);
            }
        }
    }
    return count;
    
    
}
module.exports = {
    solve : solve
};