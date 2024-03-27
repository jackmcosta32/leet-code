from typing import List


class Solution:
    # a + b + c = 0
    # a + b = -c <- target (two sum)
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        nums_len = len(nums)
        solutions_set = set([])

        for offset, target in enumerate(nums):
            if offset > 0 and target == nums[offset - 1]:
                continue

            i = offset + 1
            j = nums_len - 1

            while i < j:
                sum = nums[i] + nums[j]

                if sum == -target:
                    solution = (nums[i], nums[j], target)

                    if solution not in solutions_set:
                        solutions_set.add(solution)

                    j -= 1
                elif sum < -target:
                    i += 1
                else:
                    j -= 1

        parsed_solutions = [list(solution) for solution in solutions_set]

        return parsed_solutions
