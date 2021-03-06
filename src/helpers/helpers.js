export function createEmptyBoardState(numRows, numColumns) {
    // creates empty 2D array where each lowest-level element is an empty string
    let arr = Array(numRows);
    for (let i=0; i<numRows; i++) {
        arr[i] = Array(numColumns).fill("");
    }
    return arr;
}

/* WORD CHECKING FUNCTIONS */
export function wordIsInWordList(word, wordList) {
    return wordList.includes(word.toLowerCase());
}