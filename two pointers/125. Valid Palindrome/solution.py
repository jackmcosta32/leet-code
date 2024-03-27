import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
        lowered_s = s.lower()
        pattern = re.compile('[\W_]+')
        stripped_s = pattern.sub('', lowered_s)

        for index, letter in enumerate(stripped_s):
            if not letter.isalnum():
                continue

            if letter != stripped_s[-index - 1]:
                return False

        return True