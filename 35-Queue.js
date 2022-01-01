class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.enqueue("E");

console.log(queue.isEmpty()); // false

console.log(queue.peek()); // 'A'

console.log(queue.dequeue()); // 'A'
console.log(queue.dequeue()); // 'B'
console.log(queue.dequeue()); // 'C'
