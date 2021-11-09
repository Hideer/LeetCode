/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 要求: 要求只能原数组操作
  // 思路一: 操作原数组覆盖修改，记录零的个数并置零，时间复杂度增多
  // var k = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] != 0){
  //     nums[k++] = nums[i];
  //   }
  // }
  // for (let j = k; j < nums.length; j++){
  //   nums[j] = 0;
  // }

  // 思路二：双指针思路(冒泡的思路)
  // 以 0 作为入口 两次循环
  // for (let i = 0; i < nums.length; i++) {
  //   const ele = nums[i];
  //   if(ele === 0){
  //     for (let j = i+1; j < nums.length; j++) {
  //       const ele2 = nums[j];
  //       if (ele2 !== 0) {
  //         nums[i] = ele2;
  //         nums[j] = ele;
  //         break;
  //       }
  //     }
  //   }
  // }

  // 以不等于 0 作为入口；一次循环，并添加一个计数器
  let j = 0;
  for(let i=0;i<nums.length;i++) {
    //当前元素!=0，就把其交换到左边，等于0的交换到右边
    if(nums[i]!=0) {
      let tmp = nums[i]; // 临时存下来
      nums[i] = nums[j];
      nums[j++] = tmp;
    }
  }
};
// moveZeroes([0, 99999, 3, 12, 0]);
// @lc code=end

