function reverseString(StringData) {
  let Data = StringData;
  Data = Data.split("");
  Data = Data.reverse();
  Data = Data.join("");
  console.log(Data);
  return Data;
}
module.exports = reverseString;
