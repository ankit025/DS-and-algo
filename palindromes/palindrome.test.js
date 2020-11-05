const { TestScheduler } = require('jest');
const palindrome = require('./palindrome');

test('Palindrome test',()=>{
    expect(palindrome("aaaa")).toBe('Its a Palindrome')
})