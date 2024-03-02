function topKFrequent(nums: number[], k: number): number[] {
  const numToCountMap = nums.reduce((acc, num) => {
    if (num in acc) {
      acc[num] += 1;
    } else {
      acc[num] = 1;
    }

    return acc;
  }, {} as Record<number, number>);

  const sortedByCountNumEntries = Object.entries(numToCountMap).sort((a, b) => {
    const [aNum, aCount] = a;
    const [bNum, bCount] = b;

    return bCount - aCount;
  });

  const kFrequentNums = sortedByCountNumEntries
    .slice(0, k)
    .map(([num, count]) => Number(num));

  return kFrequentNums;
}
