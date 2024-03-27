function search(nums: number[], target: number): number {
  let targetPointer: number;
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    targetPointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    const targetValue = nums[targetPointer];

    if (targetValue < target) {
      leftPointer = targetPointer + 1;
    } else if (targetValue > target) {
      rightPointer = targetPointer - 1;
    } else {
      return targetPointer;
    }
  }

  return -1;
}
