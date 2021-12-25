// See This: https://en.wikipedia.org/wiki/Linked_list
// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    return this.getAt(this.size());
  }

  getFirst() {
    return this.getAt(1);
  }

  removeFirst() {
    this.removeAt(1);
  }

  removeLast() {
    this.removeAt(this.size());
  }

  insertFirst(value) {
    this.insertAt(value, 1);
  }

  insertLast(value) {
    this.insertAt(value, this.size() + 1);
  }

  getAt(n) {
    let target = this.head;
    for (let i = 1; i < n; i++) {
      if (target?.next) {
        target = target.next;
      }
    }
    return target;
  }

  removeAt(n) {
    if (n === 1) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(n - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(value, n) {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }
    if (n === 1) {
      this.head = new ListNode(value, this.head);
      return;
    }
    let previous = this.getAt(n - 1);
    const node = new ListNode(value, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 1;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);

node1.next = node2;

const list = new LinkedList(node1);

console.log(list); // { head: { value: 1, next: { value: 2, next: null } } }
console.log(list.size()); // 2
