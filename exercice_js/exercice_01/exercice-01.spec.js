import { moveCharsForwardInAlphabet } from '..exercice_js/exercice_01/exercice-01';

Run | debug

describe ( 'moveCharsForwardInAlphabet' , () => {
    Run | debug
    it(' should return the character b if we pass in the character a ', () => {
        const result = moveCharsForwardInAlphabet('a');
        
        expect(result).toBe('b');
    });

    Run | debug
    it(' should return the next character in the alphabet ', () => {
        expect(moveCharsForwardInAlphabet('b')).toBe('c');
    
    });

    Run | debug
    it(' return an empty string if the argument passed to the function is falsy ', () => {
        expect(moveCharsForwardInAlphabet(null)).toBe(''
        );

        expect(moveCharsForwardInAlphabet(undefined)
        ).toBe('');
    
    });


})
