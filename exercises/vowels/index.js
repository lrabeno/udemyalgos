// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// REGEX SOLUTION
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// function vowels(str) {
//   let count = 0;
//   let lower = str.toLowerCase();
//   for (let i = 0; i <= lower.length - 1; i++) {
//     if (lower[i] === 'a') {
//       count++;
//     } else if (lower[i] === 'e') {
//       count++;
//     } else if (lower[i] === 'i') {
//       count++;
//     } else if (lower[i] === 'o') {
//       count++;
//     } else if (lower[i] === 'u') {
//       count++;
//     }
//   }
//   return count;
// }

// function vowels(str) {
//   let count = 0;
//   let checker = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (checker.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }

module.exports = vowels;
