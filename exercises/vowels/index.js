// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vChars = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const vSet = new Set(vChars);

  const strArray = str.split("");

  let numOfVowels = 0;

  for (let char of strArray) {
    if (vSet.has(char)) {
      numOfVowels += 1;
    }
    // console.log(numOfVowels, char);
  }
  return numOfVowels;
}

module.exports = vowels;
