const Letter = require('./letter.js');

class Word {
    constructor(word) {
        for (let index in word) {
            this[index] = new Letter(word[index]);
        }
    }

    checkGuess(userGuess) {
        let gotAGuess = 'Incorrect';
        for (let index in this) {
            if (this[index].letter === userGuess) {
                this[index].setGuessed();
                gotAGuess = 'Correct';
            }
        }
        return gotAGuess;
    }

    checkWordGuessed() {
        for (let index in this) {
            if (!this[index].isGuessed) {
                return false;
            }
        }
        return true;
    }

    display() {
        let string = '';
        for (let index in this) {
            string += this[index].display();
        }
        return string;
    }
}

module.exports = Word;