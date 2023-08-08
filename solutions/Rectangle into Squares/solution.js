function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }
  if (lng < wdth) {
    [lng, wdth] = [wdth, lng];
  }

  const squares = [];
  while (wdth > 0) {
    squares.push(wdth);
    [lng, wdth] = [Math.max(wdth, lng - wdth), Math.min(wdth, lng - wdth)];
  }

  return squares;
}
