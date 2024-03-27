const BRACKET_PAIR_MAP = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function isValid(s: string): boolean {
  const openBrackets: string[] = [];

  const hasInvalidBracketPositioning = s.split("").some((bracket) => {
    if (bracket in BRACKET_PAIR_MAP) {
      openBrackets.push(bracket);

      return false;
    }

    const currentOpenBracket = openBrackets.pop();

    if (!currentOpenBracket) return true;

    const expectedCloseBracket = BRACKET_PAIR_MAP[currentOpenBracket];

    return expectedCloseBracket !== bracket;
  });

  const hasOpenBracketsLeft = Boolean(openBrackets.length);

  return !hasInvalidBracketPositioning && !hasOpenBracketsLeft;
}
