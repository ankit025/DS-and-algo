const reverseInt = require("./reverseInteger")

test('Test the reverse integer function',()=>{
    expect(reverseInt(57)).toBe(75)
    expect(reverseInt(-57)).toBe(-75)
})