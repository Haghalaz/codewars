sqInRect = (length, width) ->
  return null if length is width
  [length, width] = [width, length] if length < width

  squares = []
  while width > 0
    squares.push width
    [length, width] = [Math.max(width, length - width), Math.min(width, length - width)]

  squares