var reverseList = function (head) {
  // if (!head) return head

  // let current=head
  // let prev=null

  // while(current){
  //     let temp=current.next
  //     current.next=prev
  //     prev=current
  //     current=temp
  // }
  // head=prev
  // return head

  if (head == null || head.next == null) {
    return head;
  }
  let reversedListHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversedListHead;
};
