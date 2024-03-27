function isPalindrome(s: string): boolean {
  const sanitizedString = s.toLowerCase().replaceAll(/[^a-z0-9]+/g, "");
  const characterArray = sanitizedString.split("");
  const characterArrayLength = characterArray.length;

  return characterArray.every((startChar, index) => {
    const endIndex = characterArrayLength - 1 - index;
    const endChar = characterArray[endIndex];

    return startChar === endChar;
  });
}

console.log(isPalindrome("0P"));
