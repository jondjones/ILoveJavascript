const getPuzzle = async (wordCount) => {
    const apiURL = `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`;
    const response = await fetch(apiURL);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Exception('Unable to get puzzle');
    }
};