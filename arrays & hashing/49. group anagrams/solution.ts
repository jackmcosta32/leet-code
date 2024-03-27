function groupAnagrams(strs: string[]): string[][] {
  const initialCharCodePosition = "a".charCodeAt(0);

  const anagramGroupMap = strs.reduce((acc, str) => {
    const letterCountArray = [] as number[];

    str.split("").forEach((char) => {
      const charCode = char.charCodeAt(0) - initialCharCodePosition;
      const charCount = letterCountArray[charCode];

      if (typeof charCount === "undefined") {
        letterCountArray[charCode] = 1;
      } else {
        letterCountArray[charCode] += 1;
      }
    });

    const letterCountStr = letterCountArray.toString();

    if (letterCountStr in acc) {
      acc[letterCountStr].push(str);
    } else {
      acc[letterCountStr] = [str];
    }

    return acc;
  }, {} as Record<string, string[]>);

  return Object.values(anagramGroupMap);
}
