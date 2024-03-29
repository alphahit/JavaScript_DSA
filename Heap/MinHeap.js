class MinBinaryHeap {
  //Add It To End
  //Bubble It Up

  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (parent <= element) break;

      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];

      idx = parentIdx;
    }
  }
}

let heap = new MinBinaryHeap();
heap.insert(41)
heap.insert(155)
heap.insert(15)
heap.insert(18)
heap.insert(39)
heap.insert(12)
heap.insert(55)
heap.insert(10)
console.log(heap.values);

//[41,39,33,18,27,12,55]
