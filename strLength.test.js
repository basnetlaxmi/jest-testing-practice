const stringLength = require('./stringLength');

test('String Length Value', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('Laxmi')).toBe(5);
    expect(stringLength('Basnet')).toBe(6);
});