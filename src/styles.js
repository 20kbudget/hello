const css = require('sheetify');
const canvas = css`
    :host {
        position:absolute;
        top:0;
        left:0;
    }
`;
const text = {
    fontFamily: 'Arial',
    fontSize: 70,
    fill: 0xffff00,
    align: 'center'
};

module.exports = { canvas, text };
