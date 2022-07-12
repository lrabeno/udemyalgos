// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My solution using reduce
// function maxChar(str) {
//   let max = 0;
//   let maxChar = '';
//   const split = str.split('').reduce((word, char) => {
//     if (char in word) {
//       word[char]++;
//     } else {
//       word[char] = 1;
//     }
//     return word;
//   }, {});

//   for (let char in split) {
//     if (split[char] > max) {
//       max = split[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// Their solution using 2 loops

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

module.exports = maxChar;
