/* 
You are given a binary string s that contains at least one'1'

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.

*/

function maxOddBinaryNumber(binaryString) {
    const binaryArray = binaryString.split('');
    const rightmostOneIndex = binaryArray.lastIndexOf('1');
    [binaryArray[0], binaryArray[rightmostOneIndex]] = [binaryArray[rightmostOneIndex], binaryArray[0]];
    return binaryArray.join('');
}
