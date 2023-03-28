export const guessColors = ["red", "yellow", "green", "blue", "black", "white"];
export const hintColors = { 1: "white", 2: "black" };

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
