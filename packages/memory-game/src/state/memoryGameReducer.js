import {
  INITIAL_STATE,
  DISTRIBUTE_CARDS,
  REVEAL_CARD,
  MATCH_CARDS,
  HIDE_CARDS,
  ALLOW_INTERACTION,
  DISALLOW_INTERACTION
} from './memoryGameConstants.js';

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case DISTRIBUTE_CARDS:
      const { cards, positions } = action;

      const nextCards = cards.map((card, index) => ({
        ...card,
        positions: positions.slice(index * 2, index * 2 + 2)
      }));

      return { ...state, cards: nextCards };

    case REVEAL_CARD:
      return {
        ...state,
        revealed: [...state.revealed, action.position]
      };

    case MATCH_CARDS:
      const nextMatched = [
        ...state.matched,
        ...state.cards.reduce((result, card) => [
          ...result,
          ...card.positions.every(position => state.revealed.includes(position))
            ? card.positions : []
        ], [])
      ];

      return {
        ...state,
        matched: nextMatched
      };

    case HIDE_CARDS:
      return { ...state, revealed: [] };

    case ALLOW_INTERACTION:
      return { ...state, isInteractive: true };

    case DISALLOW_INTERACTION:
      return { ...state, isInteractive: false };

    default:
      return state;
  }
};
