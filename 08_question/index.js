const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } }
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } }
    }
  },
  text: 'foofava'
};

function toUry(hash) {
  for (let key in hash) {
    if (key === 'text') {
      hash[key] = hash[key].replace('foo', 'uryyyy!!');
    }
    if (typeof hash[key] === 'object') {
      toUry(hash[key]);
    }
  }
  return hash;
}

console.log(toUry(hash));
