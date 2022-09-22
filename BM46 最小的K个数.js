function GetLeastNumbers_Solution(input, k) {
    // write code here
    function percDown(index,N){
      let root = heap[index];
       
      let parent,child;
      //为root找到合适的位置
      for( parent=index; parent*2+1<N; parent=child){
        child = parent*2+1;
        //child为两个parent中值小的那个元素
        if(child+1<N && heap[child+1]>heap[child])
          child++;
         
        if( root > heap[child] )//找到了合适位置break
          break;
        else
          heap[parent] = heap[child];
      }
       
      heap[parent] = root;
    }
     
    let heap = input.slice(0,k);
     
    //前k个元素建立最大堆
    for(let i=Math.floor(k/2)-1; i>=0; i-- ){
      percDown(i,k);//第i个到第N个为最大堆
    }
     
    for(let i=k; i<input.length; i++){
      if(input[i]<heap[0]){
        heap[0] = input[i];//新的元素比大顶堆的第一个还小的话，替换大顶堆的第一个元素，重新建堆
        percDown(0,k);
      }
    }
     
    return heap;
  }
  module.exports = {
    GetLeastNumbers_Solution: GetLeastNumbers_Solution,
  };
  