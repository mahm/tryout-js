const readInput = require('../readInput');

(async () => {
  const correctNumber = Math.floor(Math.random() * 100);
  let inputNumber;
  let counter = 0;
  console.log('0-100で数字を当てて');
  do {
    counter += 1;
    inputNumber = await readInput('? ');
    if (inputNumber > correctNumber) {
      console.log('もっと下');
    } else if (inputNumber < correctNumber) {
      console.log('もっと上');
    }
  } while (inputNumber != correctNumber);
  console.log(`正解！・・・${counter}回目で当てました`);
})();
