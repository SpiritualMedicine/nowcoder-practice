//插入排序
const arr = []

function Insert(num)
{
    // write code here
    if(arr.length == 0){
        arr.push(num);
    }else{
        let i = 0;
        for(; i<arr.length; i++){
            if(arr[i] >= num){
                break;
            }
        }
        arr.splice(i, 0, num);
    }
}
function GetMedian(){
	// write code here
    let n = arr.length;
    if(n%2==1){
        return parseFloat(arr[n>>1]);
    }else{
        return parseFloat((arr[n>>1] + arr[(n>>1)-1])/2);
    }
    
}
module.exports = {
    Insert : Insert,
    GetMedian : GetMedian
};