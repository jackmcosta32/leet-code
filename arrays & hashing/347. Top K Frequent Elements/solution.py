from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_to_frequency_dict = {}
        frequency_to_nums = [[] for i in range(len(nums) + 1)]

        for num in nums:
            num_to_frequency_dict[num] = 1 + num_to_frequency_dict.get(num, 0)

        for num, frequency in num_to_frequency_dict.items():
            frequency_to_nums[frequency].append(num)

        top_k_frequent = []

        for i in range(len(frequency_to_nums) - 1, 0, -1):
            for num in frequency_to_nums[i]:
                top_k_frequent.append(num)

                if len(top_k_frequent) == k:
                    return top_k_frequent

        return top_k_frequent


