const styles = require('./src/styles');
const colorStreams = require('./src/colors');
const pull = require('pull-stream');
const Pixi = require('pixi.js');
const { colorSource, changeColorSink } = colorStreams;
const { Application, Text } = Pixi;

const text = 'Hello World';

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
    pull(colorSource, changeColorSink(sprite));
    document.body.appendChild(view);
};

if (window.cordova) {
    document.addEventListener('deviceready', init, false);
} else {
    init();
}
