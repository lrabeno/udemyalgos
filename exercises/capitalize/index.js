// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//USING FOR EACH

// function capitalize(str) {
//   const words = [];
//   let arr = str.split(' ');

//   arr.forEach((element, i) => {
//     words.push(element[0].toUpperCase() + element.slice(1));
//   });
//   return words.join(' ');
// }

// USING FOR OF LOOP

// function capitalize(str) {
//   const words = [];

//   for (word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// USING TRADITIONAL FOR LOOP

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
