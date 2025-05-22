// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const split = str.split(" ");
  let capitalStr = "";
  const capital = split.forEach((item) => {
    const word = item[0].toUpperCase() + item.slice(1);

    capitalStr += `${word} `;
  });
  console.log(capital);
  return capitalStr.slice(0, -1);
}

module.exports = capitalize;
