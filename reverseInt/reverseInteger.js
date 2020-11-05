function reverseInteger(num) {
  let numString = Math.abs(num).toString().split("").reverse().join("");
  return parseInt(numString) * Math.sign(num);
}

module.exports = reverseInteger;
