class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_count, t_count = {}, {}

        for i in range(0, len(s)):
            s_count[s[i]] = 1 + s_count.get(s[i], 0)
            t_count[t[i]] = 1 + t_count.get(t[i], 0)

        for l in s_count:
            if s_count[l] != t_count.get(l, 0):
                return False

        return True

    def isAnagram2(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)