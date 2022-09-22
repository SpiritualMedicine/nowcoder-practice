/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
 function solve(s) {
    // write code here
    const stack = [];
    let res = 0;
    let num = 0;
    let sign = "+";
    let index = 0;
    while (index < s.length) {
      if (s[index] == " ") {
        index += 1;
        continue;
      }
      if (s[index] == "(") {
        let end = index + 1;
        let lens = 1;
        while (lens > 0) {
          if (s[end] == "(") {
            lens++;
          }
          if (s[end] == ")") {
            lens--;
          }
          end++;
        }
        num = solve(s.slice(index + 1, end - 1));
        index = end - 1;
        continue;
      }
      if (s[index] >= "0" && s[index] <= "9") {
        num = num * 10 + +s[index];
      }
      if (s[index] < "0" || s[index] > "9" || index == s.length - 1) {
        if (sign == "+") {
          console.log(num);
          stack.push(num);
        } else if (sign == "-") {
          stack.push(-1 * num);
        } else if (sign == "*") {
          stack.push(stack.pop() * num);
        }
        num = 0;
        sign = s[index];
      }
      index++;
    }
    while (stack.length > 0) {
      res += stack.pop();
    }
    return res;
  }
  module.exports = {
    solve: solve,
  };
  