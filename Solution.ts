
function getEncryptedString(input: string, step: number): string {
    const encryptedString: string[] = new Array(input.length);
    for (let i = 0; i < input.length; ++i) {
        let indexReplace = (i + step) % input.length;
        encryptedString[i] = input.charAt(indexReplace);
    }
    return encryptedString.join('');
};
