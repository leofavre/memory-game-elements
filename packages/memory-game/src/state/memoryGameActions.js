import sequence from '../helpers/sequence.js';
import shuffle from '../helpers/shuffle.js';
import waitInPromise from '../helpers/waitInPromise.js';

import {
  isCardRevealed,
  isCardMatched,
  isGameOver,
  isPairOfCardsVisible,
  isVisiblePairOfCardsAMatch
} from './memoryGameSelectors.js';

import {
  DISTRIBUTE_CARDS,
  REVEAL_CARD,
  MATCH_CARDS,
  HIDE_CARDS,
  ALLOW_INTERACTION,
  DISALLOW_INTERACTION
} from './memoryGameConstants.js';

export const distributeCards = (cards, positions) => ({
  type: DISTRIBUTE_CARDS,
  cards,
  positions: positions || shuffle(sequence(cards.length * 2))
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

export const requestPlayAsync = position => async (dispatch, state) => {
  let currentState = state;

  if (isCardRevealed(position, state)) {
    console.log('Cannot reveal an already revealed card.');
  } else if (isCardMatched(position, state)) {
    console.log('Cannot reveal an already matched card.');
  } else if (isPairOfCardsVisible(state)) {
    console.log('Cannot reveal more than two cards.');
  } else {
    console.log('The selected card will be revealed.');
    currentState = dispatch(revealCard(position));
  }

  if (isPairOfCardsVisible(currentState)) {
    dispatch(disallowInteraction);
    currentState = dispatch(matchCards);

    if (isVisiblePairOfCardsAMatch(currentState)) {
      console.log('Congratulations. It’s a match!');
    } else {
      await waitInPromise(2000)();
    }

    if (isGameOver(currentState)) {
      console.log('The game is now over.');
      dispatch(disallowInteraction);
    } else {
      dispatch(hideCards);
      dispatch(allowInteraction);
    }
  }
};
