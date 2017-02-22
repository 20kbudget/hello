const Pixi = require('pixi.js');
const { Application, Text } = Pixi;

const app = new Application();
const { view, stage } = app;
document.body.appendChild(view);

const screenCenter = () => [window.screen.width / 2, window.screen.height / 2];

const text = new Text('Hello World', {
    fontFamily: 'Arial',
    fontSize: 70,
    fill: 0xffff00,
    align: 'center'
});
text.position.set(...screenCenter());
text.anchor.set(0.5, 0.5);
stage.addChild(text);

