module.exports = class Sound {

    constructor(object) {
        this._onomatopoeia = object == 'Cow' ? 'moo' : 'pow';
    }

    get sound() {
        return `${this._onomatopoeia}!`;
    }
}