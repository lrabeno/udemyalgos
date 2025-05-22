// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// using reduce
function reverse(str) {
  //   return str.split("").reverse().join("");
  const reverse = str.split("").reduce((acc, curr) => {
    return curr + acc;
  }, "");
  console.log("reverse ->", reverse);
  return reverse;
}

module.exports = reverse;
