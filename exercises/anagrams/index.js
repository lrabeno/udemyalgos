// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  const sort1 = str1.split("").sort().join("").toLowerCase();
  const sort2 = str2.split("").sort().join("").toLowerCase();

  if (sort1 === sort2) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagrams;
