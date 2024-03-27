// nums    = 1 [ 1,  2, 3, 4] 1
// prefix  = 1 [ 1,  1, 2, 6] 1 // prefix[index] = nums[index - 1] * prefix[index - 1]
// suffix  = 1 [24, 12, 4, 1] 1 // suffix[index] = nums[index + 1] * suffix[index + 1]
// product = 1 [24, 12, 8, 6] 1 // product[index] = preffix[index] * suffix[index]
function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;
  const product: number[] = [];

  let prefix = 1;
  for (let index = 0; index < numsLength; index++) {
    prefix *= nums[index - 1] ?? 1;
    product[index] = prefix;
  }

  let suffix = 1;
  for (let index = numsLength - 1; index >= 0; index--) {
    suffix *= nums[index + 1] ?? 1;
    product[index] *= suffix;
  }

  return product;
}

productExceptSelf([1, 2, 3, 4]);
