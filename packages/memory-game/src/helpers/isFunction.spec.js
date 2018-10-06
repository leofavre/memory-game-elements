import isFunction from './isFunction.js';

describe('isFunction', () => {
  it('Should return false for a string.', () => {
    expect(isFunction('a')).to.equal(false);
  });

  it('Should return false for an object.', () => {
    expect(isFunction({})).to.equal(false);
  });

  it('Should return false for an array.', () => {
    expect(isFunction([])).to.equal(false);
  });

  it('Should return false for a number.', () => {
    expect(isFunction(2)).to.equal(false);
  });

  it('Should return false for null.', () => {
    expect(isFunction(null)).to.equal(false);
  });

  it('Should return false for undefined.', () => {
    expect(isFunction(undefined)).to.equal(false);
  });

  it('Should return true for a function.', () => {
    expect(isFunction(() => 'a')).to.equal(true);
  });

  it('Should return false for a Promise.', () => {
    const testPromise = Promise.resolve('a');
    expect(isFunction(testPromise)).to.equal(false);
  });
});
