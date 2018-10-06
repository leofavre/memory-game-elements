import sequence from '../helpers/sequence.js';
import shuffle from '../helpers/shuffle.js';

import {
  isCardRevealed,
  isCardMatched,
  isGameOver,
  isPairOfCardsVisible
} from './memoryGameSelectors.js';

import {
  DISTRIBUTE_CARDS,
  REVEAL_CARD,
  MATCH_CARDS,
  HIDE_CARDS,
  ALLOW_INTERACTION,
  DISALLOW_INTERACTION
} from './memoryGameConstants.js';
import waitInPromise from '../helpers/waitInPromise.js';

export const distributeCards = cards => ({
  type: DISTRIBUTE_CARDS,
  cards,
  positions: shuffle(sequence(cards.length * 2))
});

export const revealCard = position => ({
  type: REVEAL_CARD,
  position
});

export const matchCards = () => ({
  type: MATCH_CARDS
});

export const hideCards = () => ({
  type: HIDE_CARDS
});

export const allowInteraction = () => ({
  type: ALLOW_INTERACTION
});

export const disallowInteraction = () => ({
  type: DISALLOW_INTERACTION
});

export const isPlayValid = (position, state) => {
  if (isCardRevealed(position, state)) {
    console.log('Cannot reveal an already revealed card.');
    return false;
  }

  if (isCardMatched(position, state)) {
    console.log('Cannot reveal an already matched card.');
    return false;
  }

  if (isPairOfCardsVisible(state)) {
    console.log('Cannot reveal more than two cards.');
    return false;
  }

  console.log('The selected card will be revealed.');
  return true;
};

export const requestPlayAsync = position => async (dispatch, state) => {
  let nextState = state;

  if (isPlayValid(position, state)) {
    nextState = dispatch(revealCard(position));
  }

  if (isPairOfCardsVisible(nextState)) {
    dispatch(disallowInteraction());
    await waitInPromise(2000)();
    dispatch(matchCards());
    dispatch(hideCards());
    dispatch(allowInteraction());
  }
};

export const afterPlay = (state) => {
  console.log('Layout should be changed accordingly.');

  if (isGameOver(state)) {
    console.log('The game is now over.');
  } else if (isPairOfCardsVisible(state)) {
    setTimeout(() => {
      console.log('The board should be cleaned.');
    }, 3000);
  }
};
