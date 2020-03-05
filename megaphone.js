module.exports = class Megaphone {
    
    constructor(sound) {
        this._sound = sound;
    }

    amplify() {
       return this._sound ? this._sound.toUpperCase() : "Turned off";
    }
}