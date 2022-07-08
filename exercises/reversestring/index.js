// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// USING A TRADITIONAL FOR LOOP
// function reverse(str) {
//   let reverse = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// }

/* USING A FOR OF LOOP

The line where reverse = element + reverse. The element
is each character you iterate over, but by adding it to
the reverse it will tack the new character onto the front 
thus reversing the str. */

// function reverse(str) {
//   let reverse = '';
//   for (let element of str) {
//     reverse = element + reverse;
//   }
//   return reverse;
// }

// USING REDUCE

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverse;
