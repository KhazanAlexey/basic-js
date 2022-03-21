const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value);
        return chainMaker;
    },
    removeLink(pos) {
        if ((this.chain[pos - 1] !== undefined) && (typeof pos === 'number') && (pos % 1 == 0) && (pos >= 0)) {
            this.chain.splice(pos - 1, 1);
            return chainMaker;
        } else {
            this.chain = [];
            throw new Error("You can\'t remove incorrect link!");
        }
    },
    reverseChain() {
        this.chain.reverse();
        return chainMaker;
    },
    finishChain() {
        let res = this.chain.map(item => item = `( ${item} )`).join('~~');
        this.chain = [];
        return res;
    }
};

module.exports = {
    chainMaker
};

