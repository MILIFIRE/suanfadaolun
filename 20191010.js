// class DoubleLinkedList {
//     constructor(){
//       // 指向链表开头
//       this.head = null
//       // 指向链表末尾
//       this.tail = null
//     }
    
//     /**
//      * 打印链表
//      */
//     print(){
//       let list = this.head;
//       let a=[];
//       while(list&&list !== null){
//          a.push(list.key);
//          list= list.next;
//       }
//       a.push("Null")
//       console.log("输出:",a.join('<->'))
//     }
    
//     /**
//      * 插入一个键为{key}的元素到链表头部
//      */
//     insert(key){
//        let node =  new ListNode(key);
//        if (this.head){
//             this.head.prev = node;
//             node.next = this.head;
//        }else{
//             this.tail = node;
//        }
//             this.head = node;
//     }
    
//     /**
//      * 将list合并到链表末尾
//      */
//     merge(list) {
//       /// TODO
//       this.tail.next = list.head;
//       list.head.prev = this.tail;
//       this.tail = list.tail;

//     }
//   }
  
//   class ListNode {
//     constructor(key){
//       this.prev = null
//       this.next = null
//       this.key = key
//     }
//   }
//   function center(node){
//     let list= node.head;
//     let a = [];
//     while(list){
//         a.push(list);
//         list = list.next;
//     }
//     return a[Math.floor(a.length/2)-1]
//   }
// const list = new DoubleLinkedList()
// center(list) // null
// list.insert(4)
// list.insert(3)
// list.insert(2)
// list.insert(1)
// // list = 1-2-3-4
// const node = center(list) // node.key = 2
// console.log("node:",node.key)
// list.insert(5)
// // list = 5-1-2-3-4
// const node2 = center(list) // node.key = 2
// console.log("node2:",node.key)

let ary = [1,5,6,9]
function change(arr){
  let max = Math.max(...arr);
  
  return max;
}
console.log(change(ary));