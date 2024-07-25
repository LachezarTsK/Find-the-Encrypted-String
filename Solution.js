
/**
 * @param {string} input
 * @param {number} step
 * @return {string}
 */
var getEncryptedString = function (input, step) {
    const encryptedString = new Array(input.length);
    for (let i = 0; i < input.length; ++i) {
        let indexReplace = (i + step) % input.length;
        encryptedString[i] = input.charAt(indexReplace);
    }
    return encryptedString.join('');
};
