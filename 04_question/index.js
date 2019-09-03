const readInput = require('../readInput');

function sigma(number) {
  if (number < 1) {
    return 0;
  }
  return number + sigma(number - 1);
}

(async () => {
  let inputNumber;
  do {
    inputNumber = await readInput('? ');
    inputNumber = parseInt(inputNumber);
  } while (Number.isNaN(inputNumber));
  console.log(sigma(inputNumber));
})();
