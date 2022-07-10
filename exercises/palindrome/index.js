// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   if (reversed !== str) {
//     return false;
//   }
//   console.log(reversed);
//   return true;
// }

// USING REDUCE
// function palindrome(str) {
//   const reversed = str.split('').reduce((word, letter) => {
//     return letter + word;
//   }, '');
//   if (reversed !== str) {
//     return false;
//   }
//   return true;
// }

// Iterating using .every()
// str[str.length - i - 1] means you subtract the
// index from the back at i. You subtract what index from
// the back and then every compares them from the front.

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
