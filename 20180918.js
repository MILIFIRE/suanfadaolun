class Node {
  constructor(v) {
    this.next = null
    this.value = v
  }
}

// 构造一个链表
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b
b.next = c
c.next = d

// function reverse(a) {
//   function _reverse(a, up) {
//     if (!a.next) {
//       a.next = up
//     } else {
//       _reverse(a.next, a).next = up;
//     }
//     return up
//   }
//   _reverse(a.next, a)
// }
// 执行reverse函数
// function reverse(a) {
//   function _reverse(a, up) {
//     !a.next?a.next = up:_reverse(a.next, a).next = up;
//     return up
//   }
//   _reverse(a.next, a)
// }
  // function reverse(up,a=up.next) {
    
  //   !a.next?a.next = up:reverse(a, a.next).next = up;
  //   return up
  // }

  function reverse(up,a=up.next) {
    if(!a.next){
      a.next = up;
    }else{
     reverse(a, a.next).next = up ;
    }
    return up
  }
reverse(a)
console.log('a', a);
console.log('b', a);
console.log('c', a);
console.log('d', a);


console.log(d.next.value) // c
console.log(c.next.value) // b
console.log(b.next.value) // a
console.log(a.next.value) // a