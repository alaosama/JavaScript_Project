const moveCharsForwardInAlphabet = (
    str,
    number0fPositions = 1
) => {
    if (!str) {
        return '';
        
    }

    return str
        .split('')
        .map(char => {
            const charcodeToMoveTo = 
                char.charCodeAt(0) + number0fPositions;
            const newCharCode = 
                charcodeToMoveTo > 122
                    ? charcodeToMoveTo - 26
                    : charcodeToMoveTo;
            return String.fromCharCode(newCharCode);
        })    
        .join('');
}

export {moveCharsForwardInAlphabet};
