function reverseString1(StringData) {
  let revesed = '';
  for(let character of StringData){
    revesed = character+revesed
  }
 return revesed
}
module.exports = reverseString1;
