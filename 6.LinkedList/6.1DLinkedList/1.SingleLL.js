// source https://blog.bitsrc.io/data-structures-in-javascript-single-linked-lists-7df02408ebbc

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // case:many nodes
    let current = this.head;
    let newTail = null;

    while (current) {
      if (current.next) {
        newTail = current;
      }
      current = current.next;
    }
    const deletedNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return deletedNode;
  }
  print() {
    if (!this.head) {
      return "None";
    }
    let current = this.head;
    while (current) {
      console.log("ele", current.value);
      current = current.next;
    }
  }
  getLength() {
    console.log("Linkedlist lenght", this.length);
  }

  deleteAtBeginning() {
    if (!this.head) return null;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return 0;
    }

    const currentHead = this.head;
    const newhead = currentHead.next;
    this.head = newhead;
    this.length--;
    return currentHead;
  }

  addAtBeginning(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      this.tail = newNode;
      return;
    }

    const currenthead = this.head;
    this.head = newNode;
    newNode.next = currenthead;
    this.length++;
    return newNode;
  }
  getindex(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let target = this.head;
    for (let i = 1; i < index; i++) {
      target = target.next;
    }
    return target;
  }
  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index == this.length) {
      this.push(value);
      return true;
    }
    if (index == 0) {
      this.addAtBeginning(value);
      return true;
    }

    const newNode = new Node(value);
    const previous = this.getindex(index - 1);
    const currentNode = previous.next;
    previous.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }

  reverse() {
    let movingNode = this.head;
    this.head = this.tail;
    this.tail = this.head;

    let nextNode;
    let previousNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = movingNode.next;
      movingNode.next = previousNode;

      previousNode = movingNode;
      movingNode = nextNode;
    }
  }

  search(value) {
    if (!this.head) return null;

    let current = this.head;
    while (current) {
      if (current.value == value) {
        console.log("yese exist", value);
        break;
      }
      current = current.next;
    }
  }
}

const list = new SingleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.print();
list.getLength();

list.search(3);
// list.reverse();
// list.print();
// list.getLength();

// list.pop();
// list.pop();
// list.print();
// list.getLength();
