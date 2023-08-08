rgb = (r, g, b) ->
  [r, g, b].map((color) -> 
      number = if color < 0 then 0 else if color > 255 then 255 else color;
      number.toString(16).padStart(2, 0);
    ).join("").toUpperCase()