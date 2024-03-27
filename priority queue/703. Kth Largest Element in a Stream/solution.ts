class KthLargest {
  private k: number;
  private heap: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = nums.sort((next, curr) => curr - next).slice(0, k);
  }

  add(val: number): number {
    const heapLength = this.heap.length;
    const minHeapVal = this.heap[heapLength - 1];

    if (heapLength >= this.k && val > minHeapVal) {
      this.heap.pop();
    }

    if (heapLength < this.k || val > minHeapVal) {
      this.heap.push(val);
      this.heap = this.heap.sort((next, curr) => curr - next);
    }

    return this.heap[this.heap.length - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
