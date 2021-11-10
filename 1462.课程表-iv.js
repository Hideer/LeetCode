/*
 * @lc app=leetcode.cn id=1462 lang=javascript
 *
 * [1462] 课程表 IV
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  if (!prerequisites.length) {
    return queries.map(() => {
      return false;
    });
  }
  // 思路一: 递归遍历找出各个课程的父课程 会超时! 换了两种遍历途径还是都会超时
  // let allQueries = [];
  // // prerequisites =  prerequisites.sort((a,b)=>{
  // //   return a[0] - b[0]
  // // })
  // // prerequisites.forEach((ele,index) => {
  // //   allQueries.push(ele);
  // //   let curPreVal = ele[0];
  // //   let curNextVal = ele[1]
  //   function deep(curVal,oldVal,idx) {
  //     if (curVal < numCourses) {
  //       // 这里做个小优化如果吧二维数组的第一个数组排序那每次递归遍历只需要从当前索引的下一个来即可
  //       for (let i = 0; i < prerequisites.length; i++) {
  //         const [j,k] = prerequisites[i];
  //          if (j === curVal) {
  //            allQueries.push([oldVal===null?curVal:oldVal, k]);
  //            deep(k, oldVal===null?curVal:oldVal, i);
  //          }
  //       }
  //       // prerequisites.forEach(([j,k]) => {
  //       //   if (j === curVal) {
  //       //     allQueries.push([curPreVal, k]);
  //       //     deep(k);
  //       //   }
  //       // });
  //     }
  //   }
  //   // deep(curNextVal,index);
  //   for (let n = numCourses-1; n >= 0; n--) {
  //     deep(n,null,0);
  //   }
  // // });
  // // console.log(allQueries);
  // return queries.map(([i, j]) => {
  //   return allQueries.some((item) => {
  //     return JSON.stringify(item) === JSON.stringify([i, j]);
  //   });
  // });

  // 思路二: floyed算法
  let dp = [];
  for (let i = 0; i < numCourses; i++) {
    dp[i] = new Array(numCourses).fill(false);
  }
  // console.log(dp);
  prerequisites.forEach(([i, j]) => (dp[i][j] = true));
  // console.log(dp);
  for (let k = 0; k < numCourses; k++) {
    for (let i = 0; i < numCourses; i++) {
      for (let j = 0; j < numCourses; j++) {
        if((dp[i][k] && dp[k][j])){
          // console.log(k, i, j);
        }
        dp[i][j] = dp[i][j] || (dp[i][k] && dp[k][j]);
      }
    }
  }
  return queries.map(([i, j]) => dp[i][j]);
};
// console.log(
//   checkIfPrerequisite(
//     5,
//     [
//       [3, 4],
//       [0, 1],
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [0, 4],
//       [4, 0],
//       [1, 3],
//       [3, 0],
//     ]
//   )
// );

// @lc code=end

