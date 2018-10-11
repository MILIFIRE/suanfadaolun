class DoubleLinkedList {
    constructor(){
      // 指向链表开头
      this.head = null
      // 指向链表末尾
      this.tail = null
    }
    
    /**
     * 打印链表
     */
    print(){
      let list = this.head;
      let a=[];
      while(list&&list !== null){
         a.push(list.key);
         list= list.next;
      }
      a.push("Null")
      console.log("输出:",a.join('<->'))
    }
    
    /**
     * 插入一个键为{key}的元素到链表头部
     */
    insert(key){
       let node =  new ListNode(key);
       if (this.head){
            this.head.prev = node;
            node.next = this.head;
       }else{
            this.tail = node;
       }
            this.head = node;
    }
    
    /**
     * 将list合并到链表末尾
     */
    merge(list) {
      /// TODO
      this.tail.next = list.head;
      list.head.prev = this.tail;
      this.tail = list.tail;

    }
  }
  
  class ListNode {
    constructor(key){
      this.prev = null
      this.next = null
      this.key = key
    }
  }


  const list = new DoubleLinkedList()
list.print()
// 输出: NULL
for(let i = 0; i < 5; i++) {
  list.insert( String.fromCharCode('A'.charCodeAt(0) + i) )
}

list.print()
// 输出: E<->D<->C<->B<->A<->NULL

list.insert('X')
list.print()
// 输出: X<->E<->D<->C<->B<->A<->NULL

const list2 = new DoubleLinkedList()
list2.insert('Q')
list2.insert('P')
list2.insert('O')
list2.print()
// 输出 O<->P<->Q<->NULL


list2.merge(list)
list2.print()

// 输出 O<->P<->Q<->X<->E<->D<->C<->B<->A<->NULL