// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const spaces = [];

  const octothorpes = [];

  for (let i = 0; i < n; i++) {
    spaces.push(" ");
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      octothorpes.push("#");
      console.log(spaces.join("") + octothorpes.join("") + spaces.join(""));
    }
    octothorpes.push("##");
    spaces.pop();
    console.log(spaces.join("") + octothorpes.join("") + spaces.join(""));
  }
}

module.exports = pyramid;
