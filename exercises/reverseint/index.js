// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numToStringArray = n.toString().split("");

  if (numToStringArray[0] === "-") {
    numToStringArray.shift();

    numToStringArray.reverse().unshift("-");

    let reversedNeg = numToStringArray;

    return parseInt(reversedNeg.join(""));
  } else {
    numToStringArray.reverse();
    return parseInt(numToStringArray.join(""));
  }

  //   const reversed = n.toString().split('').reverse().join('')
  //   return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
