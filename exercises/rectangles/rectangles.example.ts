class Rectangles {
  public static count(diagram: string[]): number {
    const rows = diagram.length
    const cols = rows ? diagram[0].length : 0

    let rectangles = 0

    // All possible topleft corners
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        if (diagram[y].charAt(x) === '+') {
          // All possible bottomright corners
          for (let j = y + 1; j < rows; j++) {
            for (let i = x + 1; i < cols; i++) {
              // Check if all corners are valid
              if (
                diagram[j].charAt(i) === '+' &&
                diagram[y].charAt(i) === '+' &&
                diagram[j].charAt(x) === '+'
              ) {
                let validRectangle = true

                // Check if all sides are valid
                for (let s = x + 1; s < i; s++) {
                  if (!'+-'.includes(diagram[y].charAt(s))) {
                    validRectangle = false
                  }
                }

                for (let s = x + 1; s < i; s++) {
                  if (!'+-'.includes(diagram[j].charAt(s))) {
                    validRectangle = false
                  }
                }

                for (let t = y + 1; t < j; t++) {
                  if (!'+|'.includes(diagram[t].charAt(x))) {
                    validRectangle = false
                  }
                }

                for (let t = y + 1; t < j; t++) {
                  if (!'+|'.includes(diagram[t].charAt(i))) {
                    validRectangle = false
                  }
                }

                if (validRectangle) {
                  rectangles++
                }
              }
            }
          }
        }
      }
    }

    return rectangles
  }
}

export default Rectangles
