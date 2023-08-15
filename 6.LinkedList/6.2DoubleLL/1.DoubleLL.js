class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLL {
  constructor() {
    this.head = null;
    this.tail == null;
    this.length = 0;
  }
  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" "));
    return this;
  }
  addAtEnd(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.prev = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return newNode;
    }
  }
  removeAtTail() {
    if (!this.tail || !this.head) {
      return;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return;
  }
  addAtBeginning(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
  }
  removeAtHead() {
    if (!this.head) {
      return null;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    const currentHead = this.head;
    const newHead = currentHead.next;
    this.head = newHead;
    newHead.prev = this.head;
    this.length--;
    return currentHead;
  }
  getItem(index) {
    if (index < 0 || index > this.length) return null;
    let target = this.head;
    for (let i = 1; i < index; i++) {
      target = target.next;
    }
    return target;
  }
  addAtIndex(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }
    if (index == 0) {
      return this.addAtBeginning(value);
    }
    if (index == this.length) {
      return this.addAtEnd(value);
    }
    const newNode = new Node(value);
    let previouItem = this.getItem(index - 1);
    let tempPrevNext = previouItem.next;
    previouItem.next = newNode;
    newNode.prev = previouItem;
    newNode.next = tempPrevNext;
    this.length++;
    return newNode;
  }
  getlength() {
    console.log("length :", this.length);
  }
  reverse() {
    let current = this.head;
    let temp = null;
    while (current != null) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;
      current = current.previous;
    }
    if (temp != null) {
      this.head = temp.previous;
    }
    return this.head;
  }
}

const list = new DoubleLL();
list.addAtEnd(2);
list.addAtEnd(3);
list.addAtEnd(5);
list.addAtEnd(6);
list.getlength();
// list.print();

// list.reverse();
list.print();
// list.removeAtTail();
// list.print();
// list.getlength();
