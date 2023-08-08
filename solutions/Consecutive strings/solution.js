function longestConsec(strarr, k) {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  let longestLength = 0;
  let longestString = "";

  for (let i = 0; i <= n - k; i++) {
    const consecutiveStr = strarr.slice(i, i + k).join("");
    if (consecutiveStr.length > longestLength) {
      longestLength = consecutiveStr.length;
      longestString = consecutiveStr;
    }
  }

  return longestString;
}
