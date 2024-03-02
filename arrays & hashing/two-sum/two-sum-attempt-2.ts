function twoSum(nums: number[], target: number): number[] {
  const matchIndexes: number[] = [];
  const numsToIndexes: Record<number, number> = {};

  nums.some((secondNum, secondNumIndex) => {
    const firstNum = target - secondNum;
    const firstNumIndex = numsToIndexes[firstNum];

    if (typeof firstNumIndex === "number") {
      matchIndexes.push(firstNumIndex, secondNumIndex);

      return true;
    }

    numsToIndexes[secondNum] = secondNumIndex;

    return false;
  });

  return matchIndexes;
}
