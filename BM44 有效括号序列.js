/**
 *
 * @param s string字符串
 * @return bool布尔型
 */
 function isValid(s) {
    // write code here
    const length = s.length;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "(":
        case "{":
        case "[":
          stack.push(s[i]);
          break;
  
        case ")":
          if (stack.length == 0 || stack[stack.length - 1] != "(") {
            return false;
          }
          stack.pop();
          break;
        case "]":
          if (stack.length == 0 || stack[stack.length - 1] != "[") {
            return false;
          }
          stack.pop();
          break;
        case "}":
          if (stack.length == 0 || stack[stack.length - 1] != "{") {
            return false;
          }
          stack.pop();
          break;
      }
    }
    return stack.length > 0 ? false : true;
  }
  module.exports = {
    isValid: isValid,
  };
  