function reverseString2(StringData) {
    
  return  StringData.split('').reduce((reversed,character)=>{
        return character+reversed
   },'')
  }
  module.exports = reverseString2;
  