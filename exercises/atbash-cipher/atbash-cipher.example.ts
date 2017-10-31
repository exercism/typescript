class AtbashCipher {
    static ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
    static OUT_GROUP_SIZE: number = 5;
	
	//Encode input string with atbash cipher
    static encode(input: string):string {
        return input.toLowerCase().split('')
            .filter(c => AtbashCipher.ALPHABET.includes(c) || c.match(/\d/))
            .map(function(c) {
                if (c.match(/\d/)) {
                    return c;
                }
                return AtbashCipher.ALPHABET.
                    charAt(25 - AtbashCipher.ALPHABET.indexOf(c));
            })
            .join('').match(new RegExp('.{1,' + AtbashCipher.OUT_GROUP_SIZE + '}', 'g'))
            .join(' ');
	}
	
	//Decode input string with atbash cipher
	static decode(input:string):string{
        return input.toLowerCase().split('')
            .filter(c => AtbashCipher.ALPHABET.includes(c) || c.match(/\d/))
            .map(function(c) {
                if (c.match(/\d/)) {
                    return c;
                }
                return AtbashCipher.ALPHABET.
                    charAt(25 - AtbashCipher.ALPHABET.indexOf(c));
            })
            .join('');
	}
}
export default AtbashCipher
