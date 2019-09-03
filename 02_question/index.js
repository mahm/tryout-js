const readInput = require('../readInput');

(async () => {
  const input = await readInput('? ');
  const elements = input.split(' ');
  const result = {};
  for (let element of elements) {
    if (!(element in result)) {
      result[element] = 0;
    }
    result[element] += 1;
  }
  console.log(result);
})();
