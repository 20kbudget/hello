const styles = require('./src/styles');
const { color, click, changeColor, changeText } = require('./src/colors');
const pull = require('pull-stream');
const { Application, Text } = require('pixi.js');

const text = `Hello World ${0xffffff}`;

const centerSprite = s => {
    s.anchor.set(0.5, 0.5);
    s.position.set(window.screen.width / 2, window.screen.height / 2);
};

const app = new Application();
const { view, stage } = app;
view.className = styles.canvas;

const sprite = new Text(text, styles.text);
stage.addChild(sprite);

const init = () => {
    centerSprite(sprite);
    document.body.appendChild(view);
    pull(color, pull.take(10), click(sprite), changeText(sprite), changeColor(sprite));
};

if (window.cordova) {
    document.addEventListener('deviceready', init, false);
} else {
    init();
}
