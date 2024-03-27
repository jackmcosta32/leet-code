from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        max_sequence_size = 0

        for num in nums:
            if (num - 1) not in nums_set:
                sequence_size = 0

                while (num + sequence_size) in nums_set:
                    sequence_size += 1

                max_sequence_size = max(max_sequence_size, sequence_size)

        return max_sequence_size