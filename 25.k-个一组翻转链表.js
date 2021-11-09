/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!k) return;
  // 思路一：利用链表转数组，数组转链表的暴力方式
  // let arr = [];
  // let len = 0;
  // let index = 0;
  // function deepLinkedList(list) {
  //   ++len;
  //   if (!arr[index]) arr[index] = [];
  //   arr[index].push(list.val);
  //   if (len === k) {
  //     len = 0;
  //     index += 1;
  //   }
  //   if (list.next) {
  //     deepLinkedList(list.next);
  //   }
  // }
  // // 将链表按序转成二维数组
  // deepLinkedList(head);
  // // 翻转数组并整平
  // arr = arr.map((item) => {
  //   if (item.length >= k) {
  //     return item.reverse();
  //   }
  //   return item;
  // });
  // arr = [].concat.apply([], arr);

  // // 数组在转换成链表
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

  // 思路二：对链表进行操作
  const hair = new ListNode();
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    // 如果分组的值大于整个链长则直接将链返回
    for (let i = 0; i < k; ++i) {
        tail = tail.next; // 从 0 开始
        if (!tail) {
            return hair.next;
        }
    }
    const nex = tail.next; // 把除去当前组的剩余链表保存
    console.log("倒叙前", head, tail);
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    console.log("倒叙后", head, tail, JSON.stringify(pre));
    pre.next = head;
    tail.next = nex;
    console.log(JSON.stringify(pre), nex, tail);
    pre = tail;
    head = tail.next;
  }
  console.log("结果:", hair.next === head, head, JSON.stringify(hair));
  return hair.next;
};
const myReverse = (head, tail) => {
  // 将当前链表和分组前的节点传入
    // console.log(head, tail);
    // console.log('开始反转');
    let prev = tail.next;
    let p = head;
    // console.log(prev, tail,'----');
    while (prev !== tail) {
        // console.log('单次while处理前:',prev, tail);
        // console.log('99',p);
        const nex = p.next; // 先存下头结点的内容
        p.next = prev;
        prev = p;
        p = nex;
        // console.log('单次while处理后:',prev, tail);
    }
    // console.log("结束反转");
    // console.log(tail, head);
    return [tail, head];
}
reverseKGroup({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } },2);
// 随手写了个链表倒叙的功能
// reverseGroup(
//   { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }
// );
// function reverseGroup(val) {
//   // 以链表的第第一个值为视角，则-1个值需要设置为null 
//   let pre = null;
//   let cur = val;
//   while (cur) {
//     let next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//     console.log(pre, cur, next);
//     // pre = next;
//   }
//   // 以链表的第二个值为视角
//   // let pre = val;
//   // let cur = val.next;
//   // let i = 0;
//   // while(cur){
//   //   let next = cur.next;
//   //   if (i === 0) {
//   //     pre.next = null;
//   //   }
//   //   cur.next = pre;
//   //   pre = cur;
//   //   cur = next;
//   //   i++;
//   //   console.log(JSON.stringify(pre), cur, next);
//   // }
// }
// @lc code=end

