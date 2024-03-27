function isAnagram(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;
  const matchesLength = sLength === tLength;

  if (!matchesLength) return false;

  const countLettersFromPhrase = (phrase: string): Record<string, number> => {
    const lettersMap: Record<string, number> = {};

    phrase
      .toLowerCase()
      .split("")
      .forEach((letter) => {
        if (letter in lettersMap) {
          lettersMap[letter] += 1;
        } else {
          lettersMap[letter] = 1;
        }
      });

    return lettersMap;
  };

  const sLettersMap = countLettersFromPhrase(s);
  const tLettersMap = countLettersFromPhrase(t);

  const matchesLetterCount = Object.entries(sLettersMap).every(
    ([sLetter, sCount]) => {
      const tCount = tLettersMap[sLetter];

      return tCount === sCount;
    }
  );

  return matchesLetterCount;
}
