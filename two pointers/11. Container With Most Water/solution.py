from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        max_area = 0

        while l < r:
            min_height = min(height[l], height[r])
            area = (r - l) * min_height

            if max_area < area:
                max_area = area
            elif height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return max_area
