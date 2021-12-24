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
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    let previous = this.head;
    let node = this.head?.next;

    if (!previous) return;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertFirst(value) {
    this.head = new ListNode(value, this.head);
  }

  insertLast(value) {
    const lastNode = this.getLast();
    if (lastNode) lastNode.next = new ListNode(value);
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
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);

node1.next = node2;

const list = new LinkedList(node1);

console.log(list); // { head: { value: 1, next: { value: 2, next: null } } }
console.log(list.size()); // 2
