class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    return this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.pop();

console.log(s);
console.log(s.peek());
