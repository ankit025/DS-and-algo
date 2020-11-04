const reverseString = require('./m1');

test('String is Reversed', () => {
  expect(reverseString("Hello")).toBe("olleH");
});