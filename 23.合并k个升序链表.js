/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeKLists = function(lists) {
  // 思路一：利用数组的处理方式（不推荐）

  // 亮点：代码简介
  // return lists.reduce((p, n) => {
  //       while (n) {
  //           p.push(n), n = n.next
  //       }
  //       return p
  //   },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)

  // 条理清晰
  // 1. 想将链表处理成一维数组，
  // 2. 将数组进行排序
  // 3. 最后将排序后的数组转换成链表
  // let arr = []
  // lists.forEach((ele) => {
  //   function deepLinkedList(list) {
  //     arr.push(list.val);
  //     if(list.next){
  //       deepLinkedList(list.next);
  //     }
  //   }
  //   deepLinkedList(ele)
  // });
  // arr.sort()
  // let arr_list = {};

  // function deepList(arr,map) {
  //   map["val"] = arr[0];
  //   arr.shift(1);
  //   map["next"] = arr.length?{}:null;
  //   if(arr.length){
  //     deepList(arr, map["next"]);
  //   }
  // }
  // deepList(arr, arr_list);
  // return arr_list;
  // 思路二：使用数据结构链表思路：新建一个空白链表以及一个移动的指针指向将要操作的节点上
  // 两两合并
  let ans = null;
  for (let i = 0; i < lists.length; i++) {
    ans = mergeTwoList(ans, lists[i]);
  }
  return ans;

  function mergeTwoList(pHead1, pHead2) {
    let newList = new ListNode();
    let cur = newList;
    while (pHead1 !== null && pHead2 !== null) {
      // 找出更小筛入队列中
      if(pHead1.val < pHead2.val) {
        cur.next = pHead1
        pHead1 = pHead1.next
      } else {
        cur.next = pHead2
        pHead2 = pHead2.next
      }
      cur = cur.next;
    }
    cur.next = pHead1 || pHead2;
    // console.log(newList,cur);
    return newList.next;
  }
};
// let data = mergeKLists([
//   { val: 1, next: { val: 4, next: { val: 5, next: null } } },
//   { val: 1, next: { val: 3, next: { val: 4, next: null } } },
//   { val: 2, next: { val: 6, next: null } },
// ]);
// console.log(JSON.stringify(data));
// @lc code=end

