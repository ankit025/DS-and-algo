function palindrome(str) {
  let s1 = str.split("").reverse().join("");
  if (s1 == str) {
    return "Its a Palindrome";
  } else {
    return "Its not a Palindrome";
  }
}

module.exports = palindrome;
