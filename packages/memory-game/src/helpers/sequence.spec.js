import sequence from './sequence.js';

describe('sequence', () => {
  it('Should create an array beginning at zero with the passed length.', () => {
    expect(sequence(3)).to.deep.equal([0, 1, 2]);
  });

  it('Should create an empty array when the length is not passed.', () => {
    expect(sequence()).to.deep.equal([]);
  });
});
