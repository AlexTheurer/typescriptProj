const Megaphone = require('./megaphone');
const Sound = require('./sound');

console.log(new Megaphone(new Sound('Cow').sound).amplify());