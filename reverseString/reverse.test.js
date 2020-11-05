const reverseString = require('./m1');
const reverseString1 = require('./m2');
const reverseString2 = require('./m3');

test('String is Reversed m1', () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test('String is Reversed m2', () => {
  expect(reverseString1("Hello")).toBe("olleH");
});


test('String is Reversed m3', () => {
  expect(reverseString2("Hello")).toBe("olleH");
});