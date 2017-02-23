const pull = require('pull-stream');
const extend = require('xtend');

const colors = [0xff00ff, 0xff0000, 0x00ff00, 0x0000ff];

const colorSource = pull(
    pull.count(),
    pull.map(i => colors[i % colors.length])
);

const changeColorSink = sprite => read => {
    sprite.interactive = true;
    sprite.on('pointerdown', event => {
        read(null, (end, data) => {
            sprite.style = extend(sprite.style, { stroke: data });
        });
    });
};

module.exports = { colorSource, changeColorSink };
