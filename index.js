const styles = require('./src/styles');
const Pixi = require('pixi.js');
const { Application, Text } = Pixi;

const text = 'Hello World';

const app = new Application();
const { view, stage } = app;
view.className = styles.canvas;
document.body.appendChild(view);

const centerSprite = s => {
    s.anchor.set(0.5, 0.5);
    s.position.set(window.screen.width / 2, window.screen.height / 2);
};

const sprite = new Text(text, styles.text);
centerSprite(sprite);
stage.addChild(sprite);
