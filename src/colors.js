const pull = require('pull-stream');
const extend = require('xtend');

const colors = [0xff00ff, 0xff0000, 0x00ff00, 0x0000ff];

// Source
const color = pull(pull.count(), pull.map(i => colors[i % colors.length]));

// Through
const changeText = sprite => pull.through(data => {
    const textParts = sprite.text.split(' ');
    sprite.text = `${textParts
        .slice(0, textParts.length - 1)
        .join(' ')} ${data}`;
});

// Sink
const changeColor = sprite => pull.drain(
    data => {
        sprite.style = extend(sprite.style, { stroke: data });
    },
    () => console.log('change sink ended')
);

module.exports = { color, changeText, changeColor };
