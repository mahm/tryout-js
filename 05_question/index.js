const array = [20, 31, 42, 13, 5, 38];

function sum(array) {
  dupArray = Array.from(array);
  if (dupArray.length === 0) {
    return 0;
  }
  return dupArray.shift() + sum(dupArray);
}

function avg(array) {
  return sum(array) / array.length;
}

function max(array) {
  const dupArray = Array.from(array);
  const _max = (result, array) => {
    if (array.length === 0) {
      return result;
    }
    const element = array.shift();
    return _max(result > element ? result : element, array);
  };
  return _max(0, dupArray);
}

function min(array) {
  const dupArray = Array.from(array);
  const _min = (result, array) => {
    if (array.length === 0) {
      return result;
    }
    const element = array.shift();
    return _min(result > element ? element : result, array);
  };
  return _min(max(array), dupArray);
}

if (!Array.prototype.swap) {
  Array.prototype.swap = function(a, b) {
    const tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
    return this;
  };
}
function bubbleSort(array, asc) {
  const dupArray = Array.from(array);
  for (let i = 0; i < dupArray.length; i++) {
    for (let j = dupArray.length; j > i; j--) {
      if (asc) {
        if (dupArray[j] < dupArray[j - 1]) {
          dupArray.swap(j - 1, j);
        }
      } else {
        if (dupArray[j] > dupArray[j - 1]) {
          dupArray.swap(j - 1, j);
        }
      }
    }
  }
  return dupArray;
}

function quickSort(array, asc) {
  if (array.length < 1) {
    return array;
  }
  const pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (asc) {
      if (element <= pivot) {
        left.push(element);
      } else {
        right.push(element);
      }
    } else {
      if (element >= pivot) {
        left.push(element);
      } else {
        right.push(element);
      }
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  foo = [pivot];
  return left.concat(foo).concat(right);
}

console.log(sum(array));
console.log(avg(array));
console.log(max(array));
console.log(min(array));
console.log(bubbleSort(array, true));
console.log(bubbleSort(array, false));
console.log(quickSort(array, true));
console.log(quickSort(array, false));
