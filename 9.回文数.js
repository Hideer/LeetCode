/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  // 思路一：正序和倒叙的值是完全一致的则是回文
  // 这里可利用遍历、倒叙、等数组/字符串的原生方法

  // 利用 reverse （76-80ms）
  x = x.toString();
  let reverse_x = x.split("").reverse().join("");
  return x === reverse_x;

  // 遍历 (60-84ms)
  // x = x.toString().split("");
  // let reverse_x = '';
  // for (let i = 0; i < x.length; i++) {
  //   const ele = x[i];
  //   reverse_x = ele + reverse_x;
  // }
  // return reverse_x === x.join('');

  
  // 思路二：既然是数字可以利用进制替换（60-92ms）
  // let reverse_x = 0;
  // for (let i = x; i >= 1; i = Math.floor(i / 10)){
  //   reverse_x = reverse_x * 10 + (i % 10);
  // }
  // return reverse_x === x;
};
// @lc code=end

