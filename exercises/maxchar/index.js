// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxCount = 0;
  let maxChar = "";

  // loop through string and make a key value pair of letters in str and track the number of occurences
  for (let char of str) {
    // if we dont have a char in the charMap object make the key the letter in the str and assign it to 1
    if (!charMap[char]) {
      charMap[char] = 1;
      // now if the key already exists we want to add 1 to the key to keep counting
    } else {
      charMap[char]++;
    }
  }
  // now that I have a charMap object I need to loop through the key value pairs
  for (let char in charMap) {
    // maxCount starts at 0 so we check each value in the charMap to see if its value is greater
    if (charMap[char] > maxCount) {
      // if the value is greater we keep reassigning the maxCount to the largest value
      maxCount = charMap[char];
      // we keep reassigning the value to the empty string until we finish our loop and find the largest value
      maxChar = char;
    }
  }
  // lastly make sure to return the maxChar ie the character with the most occurences.
  return maxChar;
}

module.exports = maxChar;
