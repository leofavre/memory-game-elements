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
  DISALLOW_INTERACTION,
  SEND_EVENT
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

export const sendEvent = (name, detail) => ({
  type: SEND_EVENT,
  name,
  detail
});

export const requestPlayAsync = position => async (dispatch, state) => {
  let currentState = state;
  let matchHappened = false;

  if (isCardRevealed(position, state)) {
    dispatch(sendEvent('error', 'Cannot reveal an already revealed card.'));
  } else if (isCardMatched(position, state)) {
    dispatch(sendEvent('error', 'Cannot reveal an already matched card.'));
  } else if (isPairOfCardsVisible(state)) {
    dispatch(sendEvent('error', 'Cannot reveal more than two cards.'));
  } else {
    currentState = dispatch(revealCard(position));
    dispatch(sendEvent('reveal', position));
  }

  if (isPairOfCardsVisible(currentState)) {
    dispatch(disallowInteraction);
    currentState = dispatch(matchCards);

    if (isVisiblePairOfCardsAMatch(currentState)) {
      dispatch(sendEvent('match', currentState.revealed));
      matchHappened = true;
    } else {
      await waitInPromise(2000)();
    }

    if (isGameOver(currentState)) {
      dispatch(disallowInteraction);
      dispatch(sendEvent('finish'));
    } else {
      const previouslyRevealed = currentState.revealed;
      currentState = dispatch(hideCards);

      if (!matchHappened) {
        dispatch(sendEvent('hide', previouslyRevealed));
      }

      dispatch(allowInteraction);
    }
  }
};
