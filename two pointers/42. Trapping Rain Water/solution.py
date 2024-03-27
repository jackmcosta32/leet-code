from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        l = 0
        r = 1
        total_water = 0
        current_water = 0
        len_height = len(height)

        while r < len_height - 1:
            if height[l] > height[r]:
                current_water += height[l] - height[r]
            else:
                total_water += current_water
                current_water = 0
                l = r

            r += 1
