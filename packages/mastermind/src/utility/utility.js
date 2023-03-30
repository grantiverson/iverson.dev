export const guessColors = ["red", "yellow", "green", "blue", "black", "white"];
export const hintColors = { 1: "white", 2: "black" };

// TODO: Need to revisit. Wrong if solution has two of same color and one guess
// is in the right place and the other is in the wrong place.
export const checkGuess = (solution, guess) => {
    const solutionColors = solution.map((piece) => piece.color);
    const guessedColors = guess.map((piece) => piece.color);

    const rightPlace = guessedColors.reduce((arr, piece, i) => {
        if (solutionColors[i] === piece) {
            solutionColors[i] = 0;
            return arr.concat(2);
        }

        return arr.concat(0);
    }, []);
    const rightColor = guessedColors.reduce((arr, piece) => {
        if (solutionColors.includes(piece)) {
            solutionColors[solutionColors.indexOf(piece)] = 0;
            return arr.concat(1);
        }

        return arr.concat(0);
    }, []);
    const hints =
        guessedColors.filter((piece) => piece !== null).length === 4
            ? rightPlace
                  .reduce(
                      (arr, x, i) =>
                          x ? arr.concat(x) : arr.concat(rightColor[i]),
                      [],
                  )
                  .sort()
                  .reverse()
            : [];

    return hints.map((hint, i) => ({
        color: hintColors[hint] || null,
        id: `hint-${i}`,
    }));
};

export const buildHints = (...colors) =>
    colors.reduce(
        // eslint-disable-next-line default-param-last
        (arr, color = null, i) => arr.concat({ color, id: `hint-${i}` }),
        [],
    );

export const buildPieces = (...colors) =>
    colors.reduce(
        // eslint-disable-next-line default-param-last
        (arr, color = null, i) => arr.concat({ color, id: `piece-${i}` }),
        [],
    );
