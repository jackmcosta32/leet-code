from typing import List
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_map = {}

        for word in strs:
            sorted_word = "".join(sorted(word))

            if sorted_word in anagrams_map:
                anagrams_map[sorted_word].append(word)
            else:
                anagrams_map[sorted_word] = [word]

        return anagrams_map.values()

    def enhancedGroupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_map = defaultdict(list)

        for word in strs:
            sorted_word = "".join(sorted(word))
            anagrams_map[sorted_word].append(word)

        return list(anagrams_map.values())