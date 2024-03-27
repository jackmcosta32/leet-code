from typing import List

# p[i] = p[i - 1] * p[i + 1]
# 1 [ 1,  2,  3,  4] 1
# 1 [ 1,  1,  2,  6] 1
# 1 [24, 12,  8,  6] 1


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        len_nums = len(nums)
        products = [1 for i in range(0, len_nums)]

        for i in range(1, len_nums):
            products[i] = products[i - 1] * nums[i - 1]

        postfix = 1
        for i in range(len_nums - 1, -1, -1):
            products[i] *= postfix
            postfix *= nums[i]

        return products
