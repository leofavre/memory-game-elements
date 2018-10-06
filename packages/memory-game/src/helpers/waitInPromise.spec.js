import waitInPromise from './waitInPromise.js';

describe('waitInPromise', () => {
  it('Should delay the chaining of the Promise by 100ms and pass along ' +
    'the previously resolved value to the next .then().', done => {
    const timerCallback = sinon.spy();

    Promise.resolve('previousValue')
      .then(waitInPromise(100))
      .then(value => expect(value).to.equal('previousValue'))
      .then(timerCallback)
      .then(() => expect(timerCallback).to.have.been.called)
      .then(() => done());

    expect(timerCallback).not.to.have.been.called;
  });

  it('Should resolve the Promise without delay if the parameter passed ' +
    'is not a number.', done => {
    const timerCallback = sinon.spy();

    Promise.resolve('previousValue')
      .then(waitInPromise(undefined))
      .then(timerCallback);

    setTimeout(() => {
      expect(timerCallback).to.have.been.called;
      done();
    }, 10);
  });

  it('Should pass along the original Promise argument', done => {
    const timerCallback = sinon.spy();

    Promise.resolve('previousValue')
      .then(waitInPromise(undefined))
      .then(value => expect(value).to.equal('previousValue'))
      .then(timerCallback);

    setTimeout(() => {
      expect(timerCallback).to.have.been.called;
      done();
    }, 10);
  });
});
