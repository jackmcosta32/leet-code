function twoSum(nums: number[], target: number): number[] {
  const numToIndexesMap = nums.reduce((acc, num, index) => {
    if (num in acc) {
      acc[num].push(index);
    } else {
      acc[num] = [index];
    }

    return acc;
  }, {} as Record<number, number[]>);

  let secondNum: number;
  const sortedNums = nums.sort((prev, next) => next - prev);

  const firstNum = sortedNums.find((num) => {
    secondNum = target - num;
    const hasDiff = secondNum in numToIndexesMap;

    return hasDiff;
  }) as number;

  const firstNumIndex = numToIndexesMap[firstNum];
  const areEqual = firstNum === secondNum;

  if (areEqual) return firstNumIndex;

  const secondNumIndex = numToIndexesMap[secondNum];

  return [...firstNumIndex, ...secondNumIndex];
}
