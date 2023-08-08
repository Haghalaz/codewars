function rgb(r, g, b) {
  return [r, g, b]
    .map((color) => {
      let number = color < 0 ? 0 : color > 255 ? 255 : color;
      return number.toString(16).padStart(2, 0);
    })
    .join("")
    .toUpperCase();
}
