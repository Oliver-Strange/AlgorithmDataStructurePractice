// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // array of potential octos
  const octosToPrint = [];
  // array of spaces
  const spacesToPrint = [];
  // for loop till n is met adding spaces to array
  for (let i = 0; i < n; i++) {
    spacesToPrint.push(" ");
  }
  // for loop till n is met adding #, removing a space, and logging the joined arrays
  for (let i = 0; i < n; i++) {
    octosToPrint.push("#");
    spacesToPrint.pop();
    console.log(octosToPrint.join("") + spacesToPrint.join(""));
  }
}

module.exports = steps;

// recursive
// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//     return;
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair);
// }
