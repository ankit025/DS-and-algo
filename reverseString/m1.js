function reverseString(StringData) {
  let Data = StringData;
  Data = Data.split(""); //Splits and converts it into an array
  Data = Data.reverse(); //Reverses the array
  Data = Data.join("");  //joins the array back
  return Data;  // can also return StringData.split("").reverse().join("")
}
module.exports = reverseString;
