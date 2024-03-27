function containsDuplicate(nums: number[]): boolean {
  // Matches de ammount of entries of a value
  const numEntries: Record<string, number> = {};

  const hasDupplicates = nums.some((num) => {
    if (num in numEntries) return true;

    numEntries[num] += 1;

    return false;
  });

  return hasDupplicates;
}
