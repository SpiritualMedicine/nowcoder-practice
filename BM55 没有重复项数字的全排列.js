
/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
//虽然过了 但是我还是有点懵
 function permute( num ) {
    const res = [];
    let path = [];
    let used = [];

    function recusion(){
        if(path.length == num.length){
            res.push([...path]);
        }else{
            for(let i = 0; i < num.length; i++){
                if(i!=0&&num[i] == num[i-1]&& !used[i-1]) continue;
                if(!used[i]){
                    path.push(num[i]);
                    used[i] = true;
                    recusion();
                    used[i] = false;
                    path.pop()
                }
                
            }
        }
    }
    // write code here
    
    recusion();
    return res;
}
module.exports = {
    permute : permute
};