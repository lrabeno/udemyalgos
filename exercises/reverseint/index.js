// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION
// function reverseInt(n) {
//   let split;
//   if (n < 0) {
//     split = n.toString().split('').reverse().slice(0, -1).join('') * -1;
//   } else {
//     split = n.toString().split('').reverse().join('') * 1;
//   }
//   return split;
// }

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
