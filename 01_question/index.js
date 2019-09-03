const readInput = require('../readInput');

(async () => {
  let inputNumber;
  do {
    inputNumber = await readInput('数字を入力してください? ');
    inputNumber = parseInt(inputNumber);
  } while (Number.isNaN(inputNumber));
  const results = [];
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 15 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(i);
    }
  }
  console.log(results.join(', '));
})();
