// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowelReg = /[aeiou]/gi;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if (letter.match(vowelReg)) {
//       count++;
//     }
//   }
//   return count;
// }

// function vowels(str) {
//   const vowelReg = /[aeiou]/i; // no 'g' needed when testing one char at a time
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowelReg.test(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  const vowelReg = /[aeiou]/gi;
  const match = str.match(vowelReg) || [];
  return match.length;
}

module.exports = vowels;
