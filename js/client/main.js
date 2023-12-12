
let width = 980;
let height = window.innerHeight - 20;
var game = new Phaser.Game(width, height,
    (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? Phaser.CANVAS : Phaser.AUTO),
    document.getElementById('game'),null,true,false);

game.state.add('Home',Home);
game.state.add('Game',Game);
game.state.start('Home');

