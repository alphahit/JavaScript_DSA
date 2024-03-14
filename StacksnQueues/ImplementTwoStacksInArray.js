class twoStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = size;
  }
  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.arr[++this.top1] = x;
    } else {
      console.log("Stack Overflow");
    }
  }

  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.arr[--this.top2] = x;
    } else {
      console.log("Stack Overflow");
    }
  }
  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1--];
      return x;
    } else {
      return -1;
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let x = this.arr[this.top2++];
      return x;
    } else {
      return -1;
    }
  }
}

let stack = new twoStacks(6);
stack.push1(1);
stack.push2(2);
console.log(stack.pop1());
stack.push1(3);
console.log(stack.pop1());
console.log(stack.pop1());
