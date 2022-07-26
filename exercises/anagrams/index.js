// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// UDEMY SOLUTION 1

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// UDEMY SOLUTION 2

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// MY SOLUTION

// function anagrams(stringA, stringB) {
//   const strA = stringA
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .reduce((allLetters, letter) => {
//       if (letter in allLetters) {
//         allLetters[letter]++;
//       } else {
//         allLetters[letter] = 1;
//       }

//       return allLetters;
//     }, {});

//   const strB = stringB
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .reduce((allLetters, letter) => {
//       if (letter in allLetters) {
//         allLetters[letter]++;
//       } else {
//         allLetters[letter] = 1;
//       }

//       return allLetters;
//     }, {});

//   if (Object.keys(strA).length !== Object.keys(strB).length) {
//     return false;
//   }
//   for (let char in strA) {
//     if (strA[char] === strB[char]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// MY SOLUTION 2

// function anagrams(stringA, stringB) {
//   const strA = stringA
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');

//   const strB = stringB
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');

//   if (strA === strB) {
//     return true;
//   } else {
//     return false;
//   }
// }

module.exports = anagrams;
