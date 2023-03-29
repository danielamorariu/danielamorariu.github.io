console.info('start');
var age = 18;
var myName = 'Dani';

function learning() {
    return "I'm learning...";
}
function playGame(game) {
    // console.log(this);
    return `I'm playing ${game}. My age is ${this.age}.`;
}

var dani = {
    age: 25,
    name: myName,
    skills: ["html", "css", `js`],
    learn: learning,
    play: playGame,
};

var petro = {
    age: 20,
    name: 'Petro',
    skills: ["html", "css", `js`],
    learn: learning,
    play: playGame,
};
console.log(dani.name);
var l = dani.learn();
console.warn(l);

console.warn(dani.play('chess'));
console.warn(petro.play('rubik'));

console.info(playGame.call(dani,'basket'));
console.info(playGame.apply(petro,['basket']));
console.info(playGame('basket'));