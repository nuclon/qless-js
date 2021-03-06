'use strict';

const expect = require('expect.js');
const util = require('../lib/util.js');

describe('isEmpty', () => {
  it('returns true for empty objects', () => {
    expect(util.isEmpty({})).to.eql(true);
  });

  it('returns false for non-empty objects', () => {
    expect(util.isEmpty({ foo: 5 })).to.eql(false);
  });
});

describe('asArray', () => {
  it('returns an array instead of an empty object', () => {
    expect(util.asArray({})).to.eql([]);
  });

  it('returns an array if given an array', () => {
    expect(util.asArray([1, 2, 3])).to.eql([1, 2, 3]);
  });
});

describe('deepCopy', () => {
  const obj = {
    foo: {
      bar: {
        whiz: 5,
      },
    },
  };

  it('provides an identical copy', () => {
    const copy = util.deepCopy(obj);

    expect(copy).to.eql(obj);
  });

  it('provides a new object', () => {
    const copy = util.deepCopy(obj);

    delete copy.foo.bar.whiz;
    expect(copy).not.to.eql(obj);
  });
});
