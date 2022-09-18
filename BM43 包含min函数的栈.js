const stack1 = [];
const stack2 = [Number.MAX_SAFE_INTEGER];

function push(node) {
  // write code here
  stack1.push(node);
  if(node < stack2[stack2.length-1]){
      stack2.push(node);
  }else{
      stack2.push(stack2[stack2.length-1]);
  }
}
function pop() {
  // write code here
  stack2.pop()
  return stack1.pop();
}
function top() {
  // write code here
  return stack1[stack1.length-1];
}
function min() {
  // write code here
  return stack2[stack2.length-1];
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
