const readInput = require('../readInput');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getRandomFourElement() {
  const dup = Array.from(numbers);
  for (let i = dup.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [dup[i], dup[rand]] = [dup[rand], dup[i]];
  }
  return dup.map(e => String(e)).slice(0, 4);
}
function hitAndBlow(inputArray, correctArray) {
  let hits = 0;
  let blows = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const inputElement = inputArray[i];
    const correctElement = correctArray[i];
    if (inputElement === correctElement) {
      hits += 1;
    } else if (!(correctArray.indexOf(inputElement) < 0)) {
      blows += 1;
    }
  }
  return { hits, blows };
}

function isCorrect(hitAndBlowObj) {
  return hitAndBlowObj.hits === 4;
}

(async () => {
  let inputNumber;
  let counter = 0;
  let hitAndBlowObj = {};
  const correctNumberArray = getRandomFourElement();
  while (true) {
    counter += 1;
    do {
      inputNumber = await readInput('4桁の数字は？ ');
      inputNumber = parseInt(inputNumber);
    } while (Number.isNaN(inputNumber) || `${inputNumber}`.length !== 4);
    const inputNumberArray = `${inputNumber}`.split('');
    hitAndBlowObj = hitAndBlow(inputNumberArray, correctNumberArray);
    if (isCorrect(hitAndBlowObj)) {
      break;
    }
    console.log(`外れ：${hitAndBlowObj.hits}Hits, ${hitAndBlowObj.blows}Blow`);
  }
  console.log(`${counter}回で正解！`);
})();
