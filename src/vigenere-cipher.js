const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direction = true) {
        this.direction = direction;
        this.alphabel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    keyProccessing(message, key) {
        let count = Math.round((message.length - key.length) / key.length) + 1;
        let newKey = key.repeat(count);
        newKey = newKey.split('');
        message = message.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            if (this.alphabel.indexOf(message[i]) == -1) {
                newKey.splice(i, 0, message[i])
            }
        }
        newKey = newKey.slice(0, message.length).join('').toUpperCase();
        return {corMessage: message, newKey: newKey};

    }

    encrypt(message, key) {
        if (!message || !key) throw new Error("Incorrect arguments!");
        let correctData = this.keyProccessing(message, key),
            corMessage = correctData.corMessage,
            newKey = correctData.newKey,
            arr = [];

        for (let i = 0; i < corMessage.length; i++) {
            if (this.alphabel.indexOf(corMessage[i]) != -1) {
                let newLetterIndex = (this.alphabel.indexOf(corMessage[i]) + this.alphabel.indexOf(newKey[i])) % 26;
                arr.push(this.alphabel[newLetterIndex]);
            } else {
                arr.push(corMessage[i]);
            }
        }
        if (this.direction) {
            return arr.join('');
        } else {
            return arr.reverse().join('');
        }

    }

    decrypt(message, key) {
        if (!message || !key) throw new Error("Incorrect arguments!");
        let correctData = this.keyProccessing(message, key),
            corMessage = correctData.corMessage,
            newKey = correctData.newKey,
            arr = [];

        for (let i = 0; i < corMessage.length; i++) {
            if (this.alphabel.indexOf(corMessage[i]) != -1) {
                let newLetterIndex = (this.alphabel.indexOf(corMessage[i]) + 26 - this.alphabel.indexOf(newKey[i])) % 26;
                arr.push(this.alphabel[newLetterIndex]);
            } else {
                arr.push(corMessage[i]);
            }
        }
        if (this.direction) {
            return arr.join('');
        } else {
            return arr.reverse().join('');
        }
    }
}

module.exports = {
    VigenereCipheringMachine
};
